import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Audio:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def add_track_collection_items(self, request: operations.AddTrackCollectionItemsRequest) -> operations.AddTrackCollectionItemsResponse:
        r"""Add audio tracks to collections
        This endpoint adds one or more tracks to a collection by track IDs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}/items", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTrackCollectionItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_track_collection(self, request: operations.CreateTrackCollectionRequest) -> operations.CreateTrackCollectionResponse:
        r"""Create audio collections
        This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/collections"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrackCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionCreateResponse])
                res.collection_create_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def delete_track_collection(self, request: operations.DeleteTrackCollectionRequest) -> operations.DeleteTrackCollectionResponse:
        r"""Delete audio collections
        This endpoint deletes a collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrackCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_track_collection_items(self, request: operations.DeleteTrackCollectionItemsRequest) -> operations.DeleteTrackCollectionItemsResponse:
        r"""Remove audio tracks from collections
        This endpoint removes one or more tracks from a collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrackCollectionItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def download_tracks(self, request: operations.DownloadTracksRequest) -> operations.DownloadTracksResponse:
        r"""Download audio tracks
        This endpoint redownloads tracks that you have already received a license for.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/licenses/{id}/downloads", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.URL])
                res.url = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_track(self, request: operations.GetTrackRequest) -> operations.GetTrackResponse:
        r"""Get details about audio tracks
        This endpoint shows information about a track, including its genres, instruments, and other attributes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Audio])
                res.audio = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_track_collection(self, request: operations.GetTrackCollectionRequest) -> operations.GetTrackCollectionResponse:
        r"""Get the details of audio collections
        This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_track_collection_items(self, request: operations.GetTrackCollectionItemsRequest) -> operations.GetTrackCollectionItemsResponse:
        r"""Get the contents of audio collections
        This endpoint lists the IDs of tracks in a collection and the date that each was added.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackCollectionItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.collection_item_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_track_collection_list(self, request: operations.GetTrackCollectionListRequest) -> operations.GetTrackCollectionListResponse:
        r"""List audio collections
        This endpoint lists your collections of audio tracks and their basic attributes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackCollectionListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.collection_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_track_license_list(self, request: operations.GetTrackLicenseListRequest) -> operations.GetTrackLicenseListResponse:
        r"""List audio licenses
        This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/licenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackLicenseListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.download_history_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_track_list(self, request: operations.GetTrackListRequest) -> operations.GetTrackListResponse:
        r"""List audio tracks
        This endpoint lists information about one or more audio tracks, including the description and publication date.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.audio_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def license_track(self, request: operations.LicenseTrackRequest) -> operations.LicenseTrackResponse:
        r"""License audio tracks
        This endpoint gets licenses for one or more tracks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/licenses"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.license_audio_result_data_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def list_genres(self, request: operations.ListGenresRequest) -> operations.ListGenresResponse:
        r"""List audio genres
        This endpoint returns a list of all audio genres.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/genres"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenreList])
                res.genre_list = out

        return res

    
    def list_instruments(self, request: operations.ListInstrumentsRequest) -> operations.ListInstrumentsResponse:
        r"""List audio instruments
        This endpoint returns a list of all audio instruments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/instruments"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInstrumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstrumentList])
                res.instrument_list = out

        return res

    
    def list_moods(self, request: operations.ListMoodsRequest) -> operations.ListMoodsResponse:
        r"""List audio moods
        This endpoint returns a list of all audio moods.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/moods"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMoodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MoodList])
                res.mood_list = out

        return res

    
    def rename_track_collection(self, request: operations.RenameTrackCollectionRequest) -> operations.RenameTrackCollectionResponse:
        r"""Rename audio collections
        This endpoint sets a new name for a collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/audio/collections/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RenameTrackCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_tracks(self, request: operations.SearchTracksRequest) -> operations.SearchTracksResponse:
        r"""Search for tracks
        This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/audio/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AudioSearchResults])
                res.audio_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Playlists:
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

    
    def delete_playlists_playlist_id_(self, request: operations.DeletePlaylistsPlaylistIDRequest) -> operations.DeletePlaylistsPlaylistIDResponse:
        r"""Deletes a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_playlists_playlist_id_(self, request: operations.GetPlaylistsPlaylistIDRequest) -> operations.GetPlaylistsPlaylistIDResponse:
        r"""Returns a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Playlist])
                res.playlist = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_playlists_playlist_id_reposters(self, request: operations.GetPlaylistsPlaylistIDRepostersRequest) -> operations.GetPlaylistsPlaylistIDRepostersResponse:
        r"""Returns a collection of playlist's reposters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/reposters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsPlaylistIDRepostersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.MetaUsers])
                res.meta_users = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_playlists_playlist_id_tracks(self, request: operations.GetPlaylistsPlaylistIDTracksRequest) -> operations.GetPlaylistsPlaylistIDTracksResponse:
        r"""Returns tracks under a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsPlaylistIDTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_playlists_playlist_id_tracks_200_application_json_one_of = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_playlists(self, request: operations.PostPlaylistsRequest) -> operations.PostPlaylistsResponse:
        r"""Creates a playlist.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/playlists"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPlaylists201ApplicationJSON])
                res.post_playlists_201_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def put_playlists_playlist_id_(self, request: operations.PutPlaylistsPlaylistIDRequest) -> operations.PutPlaylistsPlaylistIDResponse:
        r"""Updates a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutPlaylistsPlaylistID200ApplicationJSON])
                res.put_playlists_playlist_id_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
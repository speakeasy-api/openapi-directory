import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Reposts:
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

    
    def delete_reposts_playlists_playlist_id_(self, request: operations.DeleteRepostsPlaylistsPlaylistIDRequest) -> operations.DeleteRepostsPlaylistsPlaylistIDResponse:
        r"""Removes a repost on a playlist as the authenticated user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reposts/playlists/{playlist_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepostsPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_reposts_tracks_track_id_(self, request: operations.DeleteRepostsTracksTrackIDRequest) -> operations.DeleteRepostsTracksTrackIDResponse:
        r"""Removes a repost on a track as the authenticated user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reposts/tracks/{track_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepostsTracksTrackIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_reposts_playlists_playlist_id_(self, request: operations.PostRepostsPlaylistsPlaylistIDRequest) -> operations.PostRepostsPlaylistsPlaylistIDResponse:
        r"""Reposts a playlist as the authenticated user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reposts/playlists/{playlist_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepostsPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_reposts_tracks_track_id_(self, request: operations.PostRepostsTracksTrackIDRequest) -> operations.PostRepostsTracksTrackIDResponse:
        r"""Reposts a track as the authenticated user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reposts/tracks/{track_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepostsTracksTrackIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
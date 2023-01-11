import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Me:
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

    
    def delete_me_followings_user_id_(self, request: operations.DeleteMeFollowingsUserIDRequest) -> operations.DeleteMeFollowingsUserIDResponse:
        r"""Deletes a user who is followed by the authenticated user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/followings/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMeFollowingsUserIDResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me(self, request: operations.GetMeRequest) -> operations.GetMeResponse:
        r"""Returns the authenticated user’s information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteUser])
                res.complete_user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_activities(self, request: operations.GetMeActivitiesRequest) -> operations.GetMeActivitiesResponse:
        r"""Returns the authenticated user's activities.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/activities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Activities])
                res.activities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_activities_all_own(self, request: operations.GetMeActivitiesAllOwnRequest) -> operations.GetMeActivitiesAllOwnResponse:
        r"""Recent the authenticated user's activities.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/activities/all/own"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeActivitiesAllOwnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Activities])
                res.activities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_activities_tracks(self, request: operations.GetMeActivitiesTracksRequest) -> operations.GetMeActivitiesTracksResponse:
        r"""Returns the authenticated user's recent track related activities.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/activities/tracks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeActivitiesTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Activities])
                res.activities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_connections(self, request: operations.GetMeConnectionsRequest) -> operations.GetMeConnectionsResponse:
        r"""Returns a list of the authenticated user's connected social accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/connections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Connection]])
                res.connections = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_connections_connection_id_(self, request: operations.GetMeConnectionsConnectionIDRequest) -> operations.GetMeConnectionsConnectionIDResponse:
        r"""Returns the authenticated user's connected social account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/connections/{connection_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeConnectionsConnectionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Connection])
                res.connection = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_favorites_ids(self, request: operations.GetMeFavoritesIdsRequest) -> operations.GetMeFavoritesIdsResponse:
        r"""Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/favorites/ids"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFavoritesIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_me_followers(self, request: operations.GetMeFollowersRequest) -> operations.GetMeFollowersResponse:
        r"""Returns a list of users who are following the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/followers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFollowersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_me_followers_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_followers_follower_id_(self, request: operations.GetMeFollowersFollowerIDRequest) -> operations.GetMeFollowersFollowerIDResponse:
        r"""Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/followers/{follower_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFollowersFollowerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_followings(self, request: operations.GetMeFollowingsRequest) -> operations.GetMeFollowingsResponse:
        r"""Returns a list of users who are followed by the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/followings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFollowingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_me_followings_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_followings_tracks(self, request: operations.GetMeFollowingsTracksRequest) -> operations.GetMeFollowingsTracksResponse:
        r"""Returns a list of recent tracks from users followed by the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/followings/tracks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFollowingsTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Track]])
                res.tracks_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_followings_user_id_(self, request: operations.GetMeFollowingsUserIDRequest) -> operations.GetMeFollowingsUserIDResponse:
        r"""Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/followings/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFollowingsUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_likes_tracks(self, request: operations.GetMeLikesTracksRequest) -> operations.GetMeLikesTracksResponse:
        r"""Returns a list of favorited or liked tracks of the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/likes/tracks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeLikesTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_me_likes_tracks_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_playlists(self, request: operations.GetMePlaylistsRequest) -> operations.GetMePlaylistsResponse:
        r"""Returns user’s playlists (sets).
        Returns playlist info, playlist tracks and tracks owner info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/playlists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMePlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Playlist]])
                res.playlists_array = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_playlists_playlist_id_(self, request: operations.GetMePlaylistsPlaylistIDRequest) -> operations.GetMePlaylistsPlaylistIDResponse:
        r"""Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/playlists/{playlist_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMePlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Playlist])
                res.playlist = out

        return res

    
    def get_me_tracks(self, request: operations.GetMeTracksRequest) -> operations.GetMeTracksResponse:
        r"""Returns a list of user's tracks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tracks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_me_tracks_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_me_tracks_track_id_(self, request: operations.GetMeTracksTrackIDRequest) -> operations.GetMeTracksTrackIDResponse:
        r"""Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/tracks/{track_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTracksTrackIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    def put_me_followings_user_id_(self, request: operations.PutMeFollowingsUserIDRequest) -> operations.PutMeFollowingsUserIDResponse:
        r"""Follows a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/followings/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMeFollowingsUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
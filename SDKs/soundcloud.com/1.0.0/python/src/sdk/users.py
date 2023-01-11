import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def get_users_user_id_(self, request: operations.GetUsersUserIDRequest) -> operations.GetUsersUserIDResponse:
        r"""Returns a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteUser])
                res.complete_user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_comments(self, request: operations.GetUsersUserIDCommentsRequest) -> operations.GetUsersUserIDCommentsResponse:
        r"""Returns a list of user's comments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Comment]])
                res.comments_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_favorites(self, request: operations.GetUsersUserIDFavoritesRequest) -> operations.GetUsersUserIDFavoritesResponse:
        r"""Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/favorites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDFavoritesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_favorites_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_followers(self, request: operations.GetUsersUserIDFollowersRequest) -> operations.GetUsersUserIDFollowersResponse:
        r"""Returns a list of user’s followers.
        Returns a list of users that follows (user_id).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/followers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDFollowersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_followers_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_followings(self, request: operations.GetUsersUserIDFollowingsRequest) -> operations.GetUsersUserIDFollowingsResponse:
        r"""Returns a list of user’s followings.
        Returns list of users that (user_id) follows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/followings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDFollowingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_followings_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_followings_following_id_(self, request: operations.GetUsersUserIDFollowingsFollowingIDRequest) -> operations.GetUsersUserIDFollowingsFollowingIDResponse:
        r"""Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
        Returns (following_id) that is followed by (user_id).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/followings/{following_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDFollowingsFollowingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteUser])
                res.complete_user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_likes_tracks(self, request: operations.GetUsersUserIDLikesTracksRequest) -> operations.GetUsersUserIDLikesTracksResponse:
        r"""Returns a list of user's liked tracks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/likes/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDLikesTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_likes_tracks_200_application_json_one_of = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_playlists(self, request: operations.GetUsersUserIDPlaylistsRequest) -> operations.GetUsersUserIDPlaylistsResponse:
        r"""Returns a list of user's playlists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/playlists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_playlists_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_tracks(self, request: operations.GetUsersUserIDTracksRequest) -> operations.GetUsersUserIDTracksResponse:
        r"""Returns a list of user's tracks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_user_id_tracks_200_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_users_user_id_web_profiles(self, request: operations.GetUsersUserIDWebProfilesRequest) -> operations.GetUsersUserIDWebProfilesResponse:
        r"""Returns list of user's links added to their profile (website, facebook, instagram).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/web-profiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDWebProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.WebProfiles]])
                res.web_profiles = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
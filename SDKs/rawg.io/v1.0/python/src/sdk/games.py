import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Games:
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

    
    def games_achievements_read(self, request: operations.GamesAchievementsReadRequest) -> operations.GamesAchievementsReadResponse:
        r"""Get a list of game achievements.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/achievements", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ParentAchievement])
                res.parent_achievement = out

        return res

    
    def games_additions_list(self, request: operations.GamesAdditionsListRequest) -> operations.GamesAdditionsListResponse:
        r"""Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/additions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAdditionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesAdditionsList200ApplicationJSON])
                res.games_additions_list_200_application_json_object = out

        return res

    
    def games_development_team_list(self, request: operations.GamesDevelopmentTeamListRequest) -> operations.GamesDevelopmentTeamListResponse:
        r"""Get a list of individual creators that were part of the development team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/development-team", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesDevelopmentTeamListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesDevelopmentTeamList200ApplicationJSON])
                res.games_development_team_list_200_application_json_object = out

        return res

    
    def games_game_series_list(self, request: operations.GamesGameSeriesListRequest) -> operations.GamesGameSeriesListResponse:
        r"""Get a list of games that are part of the same series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/game-series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesGameSeriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesGameSeriesList200ApplicationJSON])
                res.games_game_series_list_200_application_json_object = out

        return res

    
    def games_list(self, request: operations.GamesListRequest) -> operations.GamesListResponse:
        r"""Get a list of games.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesList200ApplicationJSON])
                res.games_list_200_application_json_object = out

        return res

    
    def games_movies_read(self, request: operations.GamesMoviesReadRequest) -> operations.GamesMoviesReadResponse:
        r"""Get a list of game trailers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/movies", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesMoviesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Movie])
                res.movie = out

        return res

    
    def games_parent_games_list(self, request: operations.GamesParentGamesListRequest) -> operations.GamesParentGamesListResponse:
        r"""Get a list of parent games for DLC's and editions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/parent-games", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesParentGamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesParentGamesList200ApplicationJSON])
                res.games_parent_games_list_200_application_json_object = out

        return res

    
    def games_read(self, request: operations.GamesReadRequest) -> operations.GamesReadResponse:
        r"""Get details of the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GameSingle])
                res.game_single = out

        return res

    
    def games_reddit_read(self, request: operations.GamesRedditReadRequest) -> operations.GamesRedditReadResponse:
        r"""Get a list of most recent posts from the game's subreddit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/reddit", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesRedditReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reddit])
                res.reddit = out

        return res

    
    def games_screenshots_list(self, request: operations.GamesScreenshotsListRequest) -> operations.GamesScreenshotsListResponse:
        r"""Get screenshots for the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/screenshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScreenshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesScreenshotsList200ApplicationJSON])
                res.games_screenshots_list_200_application_json_object = out

        return res

    
    def games_stores_list(self, request: operations.GamesStoresListRequest) -> operations.GamesStoresListResponse:
        r"""Get links to the stores that sell the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/stores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesStoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesStoresList200ApplicationJSON])
                res.games_stores_list_200_application_json_object = out

        return res

    
    def games_suggested_read(self, request: operations.GamesSuggestedReadRequest) -> operations.GamesSuggestedReadResponse:
        r"""Get a list of visually similar games, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/suggested", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesSuggestedReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GameSingle])
                res.game_single = out

        return res

    
    def games_twitch_read(self, request: operations.GamesTwitchReadRequest) -> operations.GamesTwitchReadResponse:
        r"""Get streams on Twitch associated with the game, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/twitch", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesTwitchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Twitch])
                res.twitch = out

        return res

    
    def games_youtube_read(self, request: operations.GamesYoutubeReadRequest) -> operations.GamesYoutubeReadResponse:
        r"""Get videos from YouTube associated with the game, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/youtube", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesYoutubeReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Youtube])
                res.youtube = out

        return res

    


import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.ritekit.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def animate_image(self, request: operations.AnimateImageRequest) -> operations.AnimateImageResponse:
        r"""Animate Image
        Returns URL of an animated GIF.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/images/animate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnimateImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def auto_emojify(self, request: operations.AutoEmojifyRequest) -> operations.AutoEmojifyResponse:
        r"""Auto-Emojify
        Returns text of the post with emoji added
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/emoji/auto-emojify"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoEmojifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def auto_hashtag(self, request: operations.AutoHashtagRequest) -> operations.AutoHashtagResponse:
        r"""Auto-Hashtag
        Returns auto-hashtagged text of the post.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/auto-hashtag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoHashtagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def company_logo(self, request: operations.CompanyLogoRequest) -> operations.CompanyLogoResponse:
        r"""Company Logo
        Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.
        
        Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/images/logo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def emoji_suggestions(self, request: operations.EmojiSuggestionsRequest) -> operations.EmojiSuggestionsResponse:
        r"""Emoji Suggestions
        Returns list of emoji suggestions for a given text of the post
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/emoji/suggestions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EmojiSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def hashtag_history(self, request: operations.HashtagHistoryRequest) -> operations.HashtagHistoryResponse:
        r"""Hashtag History
        Returns historical stats for a given hashtag from the last 30 days
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/stats/history/{hashtag}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HashtagHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def hashtag_stats(self, request: operations.HashtagStatsRequest) -> operations.HashtagStatsResponse:
        r"""Hashtag Stats
        Returns real-time stats for up to 100 hashtags (updated hourly).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/multiple-hashtags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HashtagStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def hashtag_suggestions(self, request: operations.HashtagSuggestionsRequest) -> operations.HashtagSuggestionsResponse:
        r"""Hashtag Suggestions
        Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/hashtag-suggestions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HashtagSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def hashtags_cleaner(self, request: operations.HashtagsCleanerRequest) -> operations.HashtagsCleanerResponse:
        r"""Hashtags cleaner
        Remove banned hashtags before posting to Instagram
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/instagram/hashtags-cleaner"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HashtagsCleanerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list_of_ct_as(self) -> operations.ListOfCtAsResponse:
        r"""List of CTAs
        Returns list of available CTA for current user. Requires each user to authenticate with RiteKit
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/link/cta"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOfCtAsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def shorten_link(self, request: operations.ShortenLinkRequest) -> operations.ShortenLinkResponse:
        r"""Shorten Link
        Returns a shorten link with a given CTA.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/link/short-link"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ShortenLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def text_to_image(self, request: operations.TextToImageRequest) -> operations.TextToImageResponse:
        r"""Text to Image
        Returns URL of an image created from text according to given style parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/images/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TextToImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trending_hashtags(self, request: operations.TrendingHashtagsRequest) -> operations.TrendingHashtagsResponse:
        r"""Trending Hashtags
        Returns list of hashtags currently trending on Twitter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/search/trending"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingHashtagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
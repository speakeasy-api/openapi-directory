import requests
from sdk.models import operations
from . import utils

class ReviewsFindAndModifyReviews:
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

    
    def delete_reviews_review_id_(self, request: operations.DeleteReviewsReviewIDRequest) -> operations.DeleteReviewsReviewIDResponse:
        r"""Remove a review
        - Only the review author is able to remove their review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def get_reviews(self, request: operations.GetReviewsRequest) -> operations.GetReviewsResponse:
        r"""Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_reviews_review_id_(self, request: operations.GetReviewsReviewIDRequest) -> operations.GetReviewsReviewIDResponse:
        r"""Find a Review within a particular App and marketplace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_reviews_review_id_(self, request: operations.PatchReviewsReviewIDRequest) -> operations.PatchReviewsReviewIDResponse:
        r"""Update a review fields
        - Only the review author is able to update their review
        - Returns the newly updated review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_reviews(self, request: operations.PostReviewsRequest) -> operations.PostReviewsResponse:
        r"""Post a review from a User and returns the new post
        - Only authenticated users are able to post reviews
        - Returns the newly created review
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_reviews_review_id_(self, request: operations.PostReviewsReviewIDRequest) -> operations.PostReviewsReviewIDResponse:
        r"""Update a review from a User and returns the new post
        - Only the review author is able to update their review
        - Returns the newly updated review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
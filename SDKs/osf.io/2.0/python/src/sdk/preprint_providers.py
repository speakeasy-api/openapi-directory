import requests
from sdk.models import operations
from . import utils

class PreprintProviders:
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

    
    def preprint_provider_detail(self, request: operations.PreprintProviderDetailRequest) -> operations.PreprintProviderDetailResponse:
        r"""Retrieve a preprint provider
        Retrieves the details of a preprint provider.
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        
        #### Acceptable Subjects Structure
        Each preprint provider specifies acceptable subjects.
        `subjects_acceptable` is an array found in `attributes`.
        Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.
        
        
            \"subjects_acceptable\": [
                [
                    [
                        # Parent Subject:
                        # Architecture
                        \"584240d954be81056ceca9e5\",
        
                        # Child Subject:
                        # Architectural Engineering
                        \"584240da54be81056cecac87\"
                    ],
                    # Include all Architectural Engineering's children:
                    true
                ],
                [
                    [
                        # Parent Subject:
                        # Engineering
                        \"584240da54be81056cecaca9\",
        
                        # Child Subject:
                        # Aerospace Engineering
                        \"584240db54be81056cecacd6\",
        
                        # Grandchild Subject:
                        # Aerodynamics and Fluid Mechanics
                        \"584240da54be81056cecaa74\"
                    ],
                    # All nestings 3 deep must be false
                    false
                ]
            ]
        
        The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprint_providers/{preprint_provider_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintProviderDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprint_provider_licenses_list(self, request: operations.PreprintProviderLicensesListRequest) -> operations.PreprintProviderLicensesListResponse:
        r"""List all licenses
        
        A paginated list of the licenses allowed bya preprint provider.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprint_providers/{preprint_provider_id}/licenses/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintProviderLicensesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprint_provider_list(self) -> operations.PreprintProviderListResponse:
        r"""List all preprint providers
        
        A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        #### Filtering
        You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.
        
        Preprint Providers may be filtered by their `id`, `name`,  and `description`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/preprint_providers/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintProviderListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprint_provider_taxonomies_list(self, request: operations.PreprintProviderTaxonomiesListRequest) -> operations.PreprintProviderTaxonomiesListResponse:
        r"""List all taxonomies
        
        A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprint_providers/{preprint_provider_id}/taxonomies/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintProviderTaxonomiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def preprint_providers_preprints_list(self, request: operations.PreprintProvidersPreprintsListRequest) -> operations.PreprintProvidersPreprintsListResponse:
        r"""List all preprints
        
        A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
        
        The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        
        #### Filtering
        You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.
        
        Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preprint_providers/{preprint_provider_id}/preprints/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprintProvidersPreprintsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
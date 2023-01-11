import requests
from sdk.models import operations
from . import utils

class Institutions:
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

    
    def institutions_detail(self, request: operations.InstitutionsDetailRequest) -> operations.InstitutionsDetailResponse:
        r"""Retrieve an institution
        Retrieves the details of an institution
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/institutions/{institution_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def institutions_list(self) -> operations.InstitutionsListResponse:
        r"""List all institutions
        
        A paginated list of all verified institutions.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        #### Filtering
        You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.
        
        Institutions may be filtered by their `id`, `name`, and `auth_url`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/institutions/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def institutions_node_list(self, request: operations.InstitutionsNodeListRequest) -> operations.InstitutionsNodeListResponse:
        r"""List all affiliated nodes
        A paginated list of all nodes affiliated with an institution.
        #### Versioning
        As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        #### Filtering
        You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.
        
        Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/institutions/{institution_id}/nodes/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsNodeListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def institutions_registration_list(self, request: operations.InstitutionsRegistrationListRequest) -> operations.InstitutionsRegistrationListResponse:
        r"""List all affiliated registrations
        A paginated list of all registrations affiliated with an institution.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        #### Filtering
        You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.
        
        Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/institutions/{institution_id}/registrations/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsRegistrationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def institutions_users_list(self, request: operations.InstitutionsUsersListRequest) -> operations.InstitutionsUsersListResponse:
        r"""List all affiliated users
        A paginated list of all users affiliated with an institution.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 users. Each resource in the array is a separate users object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        #### Filtering
        You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.
        
        Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/institutions/{institution_id}/users/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
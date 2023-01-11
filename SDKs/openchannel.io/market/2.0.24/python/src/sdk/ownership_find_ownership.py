import requests
from sdk.models import operations
from . import utils

class OwnershipFindOwnership:
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

    
    def get_ownership(self, request: operations.GetOwnershipRequest) -> operations.GetOwnershipResponse:
        r"""Returns a paginated list of app licenses
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ownership"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_ownership_ownership_id_(self, request: operations.GetOwnershipOwnershipIDRequest) -> operations.GetOwnershipOwnershipIDResponse:
        r"""Returns an ownership record
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_ownership_ownership_id_(self, request: operations.PatchOwnershipOwnershipIDRequest) -> operations.PatchOwnershipOwnershipIDResponse:
        r"""Updates ownership fields
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_install(self, request: operations.PostOwnershipInstallRequest) -> operations.PostOwnershipInstallResponse:
        r"""Aquires an app license for a user (installs app)
         - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ownership/install"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipInstallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_uninstall_ownership_id_(self, request: operations.PostOwnershipUninstallOwnershipIDRequest) -> operations.PostOwnershipUninstallOwnershipIDResponse:
        r"""Uninstalls a license for a particular user and app (uninstalls app)
         - This method is called on behalf of a user - User data and statistics are recorded when this method is called 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/uninstall/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipUninstallOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_ownership_id_(self, request: operations.PostOwnershipOwnershipIDRequest) -> operations.PostOwnershipOwnershipIDResponse:
        r"""Updates an ownership record
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
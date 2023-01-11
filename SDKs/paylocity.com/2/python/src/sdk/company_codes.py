import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CompanyCodes:
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

    
    def get_all_company_codes_and_descriptions_by_resource(self, request: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest) -> operations.GetAllCompanyCodesAndDescriptionsByResourceResponse:
        r"""Get All Company Codes
        Get All Company Codes for the selected company and resource
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/codes/{codeResource}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCompanyCodesAndDescriptionsByResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CompanyCodes]])
                res.company_codes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AquiferCodes:
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

    
    def aquifer_codes_demand_list(self, request: operations.AquiferCodesDemandListRequest) -> operations.AquiferCodesDemandListResponse:
        r"""return a list of aquifer demand codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/demand/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesDemandListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesDemandList200ApplicationJSON])
                res.aquifer_codes_demand_list_200_application_json_object = out

        return res

    
    def aquifer_codes_materials_list(self, request: operations.AquiferCodesMaterialsListRequest) -> operations.AquiferCodesMaterialsListResponse:
        r"""return a list of aquifer material codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/materials/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesMaterialsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesMaterialsList200ApplicationJSON])
                res.aquifer_codes_materials_list_200_application_json_object = out

        return res

    
    def aquifer_codes_productivity_list(self, request: operations.AquiferCodesProductivityListRequest) -> operations.AquiferCodesProductivityListResponse:
        r"""return a list of aquifer productivity codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/productivity/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesProductivityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesProductivityList200ApplicationJSON])
                res.aquifer_codes_productivity_list_200_application_json_object = out

        return res

    
    def aquifer_codes_quality_concerns_list(self, request: operations.AquiferCodesQualityConcernsListRequest) -> operations.AquiferCodesQualityConcernsListResponse:
        r"""return a list of quality concern codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/quality-concerns/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesQualityConcernsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesQualityConcernsList200ApplicationJSON])
                res.aquifer_codes_quality_concerns_list_200_application_json_object = out

        return res

    
    def aquifer_codes_subtypes_list(self, request: operations.AquiferCodesSubtypesListRequest) -> operations.AquiferCodesSubtypesListResponse:
        r"""return a list of aquifer subtype codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/subtypes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesSubtypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesSubtypesList200ApplicationJSON])
                res.aquifer_codes_subtypes_list_200_application_json_object = out

        return res

    
    def aquifer_codes_vulnerability_list(self, request: operations.AquiferCodesVulnerabilityListRequest) -> operations.AquiferCodesVulnerabilityListResponse:
        r"""return a list of aquifer vulnerability codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/vulnerability/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesVulnerabilityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesVulnerabilityList200ApplicationJSON])
                res.aquifer_codes_vulnerability_list_200_application_json_object = out

        return res

    
    def aquifer_codes_water_use_list(self, request: operations.AquiferCodesWaterUseListRequest) -> operations.AquiferCodesWaterUseListResponse:
        r"""return a list of water use codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/water-use/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesWaterUseListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesWaterUseList200ApplicationJSON])
                res.aquifer_codes_water_use_list_200_application_json_object = out

        return res

    
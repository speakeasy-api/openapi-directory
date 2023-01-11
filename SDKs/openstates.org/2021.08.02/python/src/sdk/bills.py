import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Bills:
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

    
    def bill_detail_bills_jurisdiction_session_bill_id_get(self, request: operations.BillDetailBillsJurisdictionSessionBillIDGetRequest) -> operations.BillDetailBillsJurisdictionSessionBillIDGetResponse:
        r"""Bill Detail
        Obtain bill information based on (state, session, bill_id).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bills/{jurisdiction}/{session}/{bill_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillDetailBillsJurisdictionSessionBillIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def bill_detail_by_id_bills_ocd_bill_openstates_bill_id_get(self, request: operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest) -> operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse:
        r"""Bill Detail By Id
        Obtain bill information by internal ID in the format ocd-bill/*uuid*. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bills/ocd-bill/{openstates_bill_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def bills_search_bills_get(self, request: operations.BillsSearchBillsGetRequest) -> operations.BillsSearchBillsGetResponse:
        r"""Bills Search
        Search for bills matching given criteria.
        
        Must either specify a jurisdiction or a full text query (q).  Additional parameters will
        futher restrict bills returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bills"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsSearchBillsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillList])
                res.bill_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
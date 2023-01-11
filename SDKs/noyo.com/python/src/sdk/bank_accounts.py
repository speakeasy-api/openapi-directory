import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BankAccounts:
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

    
    def create_bank_account(self, request: operations.CreateBankAccountRequest) -> operations.CreateBankAccountResponse:
        r"""Create Bank Account
        Create a bank account. Only a single bank account is permitted for a particular group application. If a subsequent one is submitted, you will receive a 409 error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/bank_accounts", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBankAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BankAccountResult])
                res.bank_account_result = out

        return res

    
    def delete_bank_account(self, request: operations.DeleteBankAccountRequest) -> operations.DeleteBankAccountResponse:
        r"""Delete a Bank Account
        Delete a Bank Account based on the ID provided. The version parameter must match the latest Bank Account version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/bank_accounts/{bank_account_id}/{version}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBankAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_all_bank_accounts(self, request: operations.GetAllBankAccountsRequest) -> operations.GetAllBankAccountsResponse:
        r"""Get All Bank Account
        Returns the latest version of all bank accounts related to the application whose ID was provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/bank_accounts", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllBankAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BankAccountPaginatedResult])
                res.bank_account_paginated_result = out

        return res

    
    def get_bank_account(self, request: operations.GetBankAccountRequest) -> operations.GetBankAccountResponse:
        r"""Get Bank Account
        Returns the latest version of a single bank account based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/bank_accounts/{bank_account_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBankAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BankAccountResult])
                res.bank_account_result = out

        return res

    
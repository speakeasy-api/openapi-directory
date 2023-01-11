import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class PayeeInvitation:
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

    
    def get_payees_invitation_status_v3(self, request: operations.GetPayeesInvitationStatusV3Request) -> operations.GetPayeesInvitationStatusV3Response:
        r"""Get Payee Invitation Status
        <p>Use v4 instead</p>
        <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payees/payors/{payorId}/invitationStatus", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayeesInvitationStatusV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PagedPayeeInvitationStatusResponse])
                res.paged_payee_invitation_status_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def get_payees_invitation_status_v4(self, request: operations.GetPayeesInvitationStatusV4Request) -> operations.GetPayeesInvitationStatusV4Response:
        r"""Get Payee Invitation Status
        Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/payees/payors/{payorId}/invitationStatus", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayeesInvitationStatusV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PagedPayeeInvitationStatusResponse2])
                res.paged_payee_invitation_status_response_2 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def query_batch_status_v3(self, request: operations.QueryBatchStatusV3Request) -> operations.QueryBatchStatusV3Response:
        r"""Query Batch Status
        <p>Use v4 instead</p>
        Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payees/batch/{batchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryBatchStatusV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryBatchResponse])
                res.query_batch_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def query_batch_status_v4(self, request: operations.QueryBatchStatusV4Request) -> operations.QueryBatchStatusV4Response:
        r"""Query Batch Status
        Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/payees/batch/{batchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryBatchStatusV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryBatchResponse2])
                res.query_batch_response_2 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def resend_payee_invite_v3(self, request: operations.ResendPayeeInviteV3Request) -> operations.ResendPayeeInviteV3Response:
        r"""Resend Payee Invite
        <p>Use v4 instead</p>
        <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
        <p>Any previous invites to the payee by this Payor will be invalidated</p>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/payees/{payeeId}/invite", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendPayeeInviteV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_409 = out

        return res

    
    def resend_payee_invite_v4(self, request: operations.ResendPayeeInviteV4Request) -> operations.ResendPayeeInviteV4Response:
        r"""Resend Payee Invite
        <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
        <p>Any previous invites to the payee by this Payor will be invalidated</p>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/payees/{payeeId}/invite", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendPayeeInviteV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_409 = out

        return res

    
    def v3_create_payee(self, request: operations.V3CreatePayeeRequest) -> operations.V3CreatePayeeResponse:
        r"""Initiate Payee Creation
        <p>Use v4 instead</p>
        Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
        for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
        400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
        within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
        that provided for another payee within the same batch). The validation at this stage is intra-batch only.
        Validation against payees who have already been invited occurs subsequently during processing of the batch.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/payees"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.V3CreatePayeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePayeesCsvResponse])
                res.create_payees_csv_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
    def v4_create_payee(self, request: operations.V4CreatePayeeRequest) -> operations.V4CreatePayeeResponse:
        r"""Initiate Payee Creation
        Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
        for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
        400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
        within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
        that provided for another payee within the same batch). The validation at this stage is intra-batch only.
        Validation against payees who have already been invited occurs subsequently during processing of the batch.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/payees"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.V4CreatePayeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePayeesCsvResponse2])
                res.create_payees_csv_response_2 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_400 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_403 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_404 = out

        return res

    
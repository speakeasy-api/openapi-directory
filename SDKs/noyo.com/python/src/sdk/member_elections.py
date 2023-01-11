import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MemberElections:
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

    
    def create_member_election(self, request: operations.CreateMemberElectionRequest) -> operations.CreateMemberElectionResponse:
        r"""Create new Member Election
        Create a new member election for an coverage plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/coverage_plans/{plan_id}/member_elections", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMemberElectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberElectionResult])
                res.member_election_result = out

        return res

    
    def edit_member_election(self, request: operations.EditMemberElectionRequest) -> operations.EditMemberElectionResponse:
        r"""Edit a Member Election
        Edit a member election based on the ID provided. The version parameter must match the latest member election version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/member_elections/{member_election_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditMemberElectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberElectionResult])
                res.member_election_result = out

        return res

    
    def get_application_member_elections(self, request: operations.GetApplicationMemberElectionsRequest) -> operations.GetApplicationMemberElectionsResponse:
        r"""Get all Application Member Elections
        Returns a list of all member elections for a given application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/member_elections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationMemberElectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedMemberElectionResult])
                res.paginated_member_election_result = out

        return res

    
    def get_coverage_plan_member_elections(self, request: operations.GetCoveragePlanMemberElectionsRequest) -> operations.GetCoveragePlanMemberElectionsResponse:
        r"""Get all Coverage Plan Member Elections
        Returns a list of all member elections for a given coverage plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/coverage_plans/{plan_id}/member_elections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCoveragePlanMemberElectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedMemberElectionResult])
                res.paginated_member_election_result = out

        return res

    
    def get_member_election(self, request: operations.GetMemberElectionRequest) -> operations.GetMemberElectionResponse:
        r"""Get a Member Election
        Returns a member election.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/member_elections/{member_election_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMemberElectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberElectionResult])
                res.member_election_result = out

        return res

    
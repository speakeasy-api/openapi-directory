import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class JobFeed:
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

    
    def get_industries(self) -> operations.GetIndustriesResponse:
        r"""Industries
        The Industries endpoint returns all the Industries and related sub industries 
        defined in WorkBC's Job Board. The response includes the id and caption for 
        each industry and each sub industry.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Industries"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIndustriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Industry]])
                res.industries = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_job_types(self) -> operations.GetJobTypesResponse:
        r"""Job Types
        The Job Types endpoint returns details of all of the
        job types defined in WorkBC's Job Board. The response includes the
        id and caption.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JobType]])
                res.job_types = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_major_projects(self) -> operations.GetMajorProjectsResponse:
        r"""Major Projects
        The Major Projects endpoint returns details of all of the
        major projects defined in WorkBC's Job Board. The response includes the
        id and caption.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/majorProjects"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMajorProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MajorProject]])
                res.major_projects = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_regions(self) -> operations.GetRegionsResponse:
        r"""Regions
        The Regions endpoint returns details of all of the
        regions defined in WorkBC's Job Board. The response includes the
        id and caption.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Region]])
                res.regions = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
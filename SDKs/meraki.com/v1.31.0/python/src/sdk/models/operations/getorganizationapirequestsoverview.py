"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Any, Optional


@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewRequest:
    
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})  
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    r"""The beginning of the timespan for the data. The maximum lookback period is 31 days from today."""  
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    r"""The end of the timespan for the data. t1 can be a maximum of 31 days after t0."""  
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    r"""The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days."""  
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_organization_api_requests_overview_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
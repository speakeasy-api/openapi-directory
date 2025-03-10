"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import alt_enum as shared_alt_enum
from ..shared import performancereportlist as shared_performancereportlist
from typing import Optional


@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListRequest:
    
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    r"""The account id to get the reports."""  
    end_date_time: str = dataclasses.field(metadata={'query_param': { 'field_name': 'endDateTime', 'style': 'form', 'explode': True }})
    r"""The end time of the report in ISO 8601 timestamp format using UTC."""  
    start_date_time: str = dataclasses.field(metadata={'query_param': { 'field_name': 'startDateTime', 'style': 'form', 'explode': True }})
    r"""The start time of the report in ISO 8601 timestamp format using UTC."""  
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    r"""Data format for the response."""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Selector specifying which fields to include in a partial response."""  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    r"""Maximum number of entries returned on one result page. If not set, the default is 100. Optional."""  
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    r"""OAuth 2.0 token for the current user."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    r"""A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of \\"nextPageToken\\" from the previous response. Optional."""  
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    r"""Returns response with indentations and line breaks."""  
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    r"""An opaque string that represents a user for quota purposes. Must not exceed 40 characters."""  
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    r"""Deprecated. Please use quotaUser instead."""  
    

@dataclasses.dataclass
class AdexchangebuyerPerformanceReportListResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    performance_report_list: Optional[shared_performancereportlist.PerformanceReportList] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
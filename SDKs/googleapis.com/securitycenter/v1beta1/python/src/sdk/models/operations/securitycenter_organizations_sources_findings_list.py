"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import listfindingsresponse as shared_listfindingsresponse
from typing import Optional


@dataclasses.dataclass
class SecuritycenterOrganizationsSourcesFindingsListSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class SecuritycenterOrganizationsSourcesFindingsListRequest:
    
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    r"""Required. Name of the source the findings belong to. Its format is \\"organizations/[organization_id]/sources/[source_id]\\". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/-"""  
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    r"""V1 error format."""  
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    r"""OAuth access token."""  
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    r"""Data format for response."""  
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    r"""JSONP"""  
    field_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldMask', 'style': 'form', 'explode': True }})
    r"""Optional. A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields."""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Selector specifying which fields to include in a partial response."""  
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    r"""Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `source_properties.size = 100` is a valid filter string."""  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    r"""OAuth 2.0 token for the current user."""  
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    r"""Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: \\"name,resource_properties.a_property\\". The default sorting order is ascending. To specify descending order for a field, a suffix \\" desc\\" should be appended to the field name. For example: \\"name desc,source_properties.a_property\\". Redundant space characters in the syntax are insignificant. \\"name desc,source_properties.a_property\\" and \\" name desc , source_properties.a_property \\" are equivalent."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    r"""The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    r"""The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data."""  
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    r"""Returns response with indentations and line breaks."""  
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    r"""Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."""  
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'readTime', 'style': 'form', 'explode': True }})
    r"""Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW."""  
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    r"""Upload protocol for media (e.g. \\"raw\\", \\"multipart\\")."""  
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    r"""Legacy upload protocol for media (e.g. \\"media\\", \\"multipart\\")."""  
    

@dataclasses.dataclass
class SecuritycenterOrganizationsSourcesFindingsListResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    list_findings_response: Optional[shared_listfindingsresponse.ListFindingsResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
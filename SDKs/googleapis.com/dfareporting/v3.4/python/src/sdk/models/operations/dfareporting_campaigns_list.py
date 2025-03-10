"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import campaignslistresponse as shared_campaignslistresponse
from enum import Enum
from typing import Optional


@dataclasses.dataclass
class DfareportingCampaignsListSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    
class DfareportingCampaignsListSortFieldEnum(str, Enum):
    r"""Field by which to sort the list."""
    ID = 'ID'
    NAME = 'NAME'

class DfareportingCampaignsListSortOrderEnum(str, Enum):
    r"""Order of sorted results."""
    ASCENDING = 'ASCENDING'
    DESCENDING = 'DESCENDING'


@dataclasses.dataclass
class DfareportingCampaignsListRequest:
    
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    r"""User profile ID associated with this request."""  
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    r"""V1 error format."""  
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    r"""OAuth access token."""  
    advertiser_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserGroupIds', 'style': 'form', 'explode': True }})
    r"""Select only campaigns whose advertisers belong to these advertiser groups."""  
    advertiser_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserIds', 'style': 'form', 'explode': True }})
    r"""Select only campaigns that belong to these advertisers."""  
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    r"""Data format for response."""  
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    r"""Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns."""  
    at_least_one_optimization_activity: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'atLeastOneOptimizationActivity', 'style': 'form', 'explode': True }})
    r"""Select only campaigns that have at least one optimization activity."""  
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    r"""JSONP"""  
    excluded_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludedIds', 'style': 'form', 'explode': True }})
    r"""Exclude campaigns with these IDs."""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Selector specifying which fields to include in a partial response."""  
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    r"""Select only campaigns with these IDs."""  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    r"""Maximum number of results to return."""  
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    r"""OAuth 2.0 token for the current user."""  
    overridden_event_tag_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'overriddenEventTagId', 'style': 'form', 'explode': True }})
    r"""Select only campaigns that have overridden this event tag ID."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    r"""Value of the nextPageToken from the previous result page."""  
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    r"""Returns response with indentations and line breaks."""  
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    r"""Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."""  
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    r"""Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, \\"campaign*2015\\" will return campaigns with names like \\"campaign June 2015\\", \\"campaign April 2015\\", or simply \\"campaign 2015\\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \\"campaign\\" will match campaigns with name \\"my campaign\\", \\"campaign 2015\\", or simply \\"campaign\\"."""  
    sort_field: Optional[DfareportingCampaignsListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    r"""Field by which to sort the list."""  
    sort_order: Optional[DfareportingCampaignsListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    r"""Order of sorted results."""  
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccountId', 'style': 'form', 'explode': True }})
    r"""Select only campaigns that belong to this subaccount."""  
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    r"""Upload protocol for media (e.g. \\"raw\\", \\"multipart\\")."""  
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    r"""Legacy upload protocol for media (e.g. \\"media\\", \\"multipart\\")."""  
    

@dataclasses.dataclass
class DfareportingCampaignsListResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    campaigns_list_response: Optional[shared_campaignslistresponse.CampaignsListResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
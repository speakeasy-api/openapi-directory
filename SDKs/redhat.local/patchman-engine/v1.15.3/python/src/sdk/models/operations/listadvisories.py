"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import controllers_advisoriesresponse as shared_controllers_advisoriesresponse
from enum import Enum
from typing import Optional


@dataclasses.dataclass
class ListAdvisoriesSecurity:
    
    rh_identity: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'x-rh-identity' }})  
    
class ListAdvisoriesSortEnum(str, Enum):
    r"""Sort field"""
    ID = 'id'
    NAME = 'name'
    ADVISORY_TYPE = 'advisory_type'
    SYNOPSIS = 'synopsis'
    PUBLIC_DATE = 'public_date'
    APPLICABLE_SYSTEMS = 'applicable_systems'


@dataclasses.dataclass
class ListAdvisoriesRequest:
    
    filter_advisory_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_applicable_systems: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[applicable_systems]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_public_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_severity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_synopsis: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    r"""Filter"""  
    filter_system_profile_sap_sids_in: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    r"""Filter systems by their SAP SIDs"""  
    filter_system_profile_sap_system: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    r"""Filter only SAP systems"""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    r"""Limit for paging, set -1 to return all"""  
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    r"""Offset for paging"""  
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    r"""Find matching text"""  
    sort: Optional[ListAdvisoriesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    r"""Sort field"""  
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    r"""Tag filter"""  
    

@dataclasses.dataclass
class ListAdvisoriesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    controllers_advisories_response: Optional[shared_controllers_advisoriesresponse.ControllersAdvisoriesResponse] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
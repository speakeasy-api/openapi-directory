"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import completequeryresponse as shared_completequeryresponse
from enum import Enum
from typing import Optional


@dataclasses.dataclass
class JobsProjectsCompleteSecurityOption1:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class JobsProjectsCompleteSecurityOption2:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class JobsProjectsCompleteSecurity:
    
    option1: Optional[JobsProjectsCompleteSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})  
    option2: Optional[JobsProjectsCompleteSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})  
    
class JobsProjectsCompleteScopeEnum(str, Enum):
    r"""Optional. The scope of the completion. The defaults is CompletionScope.PUBLIC."""
    COMPLETION_SCOPE_UNSPECIFIED = 'COMPLETION_SCOPE_UNSPECIFIED'
    TENANT = 'TENANT'
    PUBLIC = 'PUBLIC'

class JobsProjectsCompleteTypeEnum(str, Enum):
    r"""Optional. The completion topic. The default is CompletionType.COMBINED."""
    COMPLETION_TYPE_UNSPECIFIED = 'COMPLETION_TYPE_UNSPECIFIED'
    JOB_TITLE = 'JOB_TITLE'
    COMPANY_NAME = 'COMPANY_NAME'
    COMBINED = 'COMBINED'


@dataclasses.dataclass
class JobsProjectsCompleteRequest:
    
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    r"""Required. Resource name of project the completion is performed within. The format is \\"projects/{project_id}\\", for example, \\"projects/api-test-project\\"."""  
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    r"""V1 error format."""  
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    r"""OAuth access token."""  
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    r"""Data format for response."""  
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    r"""JSONP"""  
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'companyName', 'style': 'form', 'explode': True }})
    r"""Optional. If provided, restricts completion to specified company. The format is \\"projects/{project_id}/companies/{company_id}\\", for example, \\"projects/api-test-project/companies/foo\\"."""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Selector specifying which fields to include in a partial response."""  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    r"""Deprecated. Use language_codes instead. Optional. The language of the query. This is the BCP-47 language code, such as \\"en-US\\" or \\"sr-Latn\\". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). For CompletionType.JOB_TITLE type, only open jobs with the same language_code are returned. For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_code are returned. For CompletionType.COMBINED type, only open jobs with the same language_code or companies having open jobs with the same language_code are returned. The maximum number of allowed characters is 255."""  
    language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCodes', 'style': 'form', 'explode': True }})
    r"""Optional. The list of languages of the query. This is the BCP-47 language code, such as \\"en-US\\" or \\"sr-Latn\\". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). For CompletionType.JOB_TITLE type, only open jobs with the same language_codes are returned. For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_codes are returned. For CompletionType.COMBINED type, only open jobs with the same language_codes or companies having open jobs with the same language_codes are returned. The maximum number of allowed characters is 255."""  
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    r"""OAuth 2.0 token for the current user."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    r"""Required. Completion result count. The maximum allowed page size is 10."""  
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    r"""Returns response with indentations and line breaks."""  
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    r"""Required. The query used to generate suggestions. The maximum number of allowed characters is 255."""  
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    r"""Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."""  
    scope: Optional[JobsProjectsCompleteScopeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    r"""Optional. The scope of the completion. The defaults is CompletionScope.PUBLIC."""  
    type: Optional[JobsProjectsCompleteTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    r"""Optional. The completion topic. The default is CompletionType.COMBINED."""  
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    r"""Upload protocol for media (e.g. \\"raw\\", \\"multipart\\")."""  
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    r"""Legacy upload protocol for media (e.g. \\"media\\", \\"multipart\\")."""  
    

@dataclasses.dataclass
class JobsProjectsCompleteResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    complete_query_response: Optional[shared_completequeryresponse.CompleteQueryResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
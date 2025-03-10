"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googlefirebaseappcheckv1batchgetrecaptchav3configsresponse as shared_googlefirebaseappcheckv1batchgetrecaptchav3configsresponse
from typing import Optional


@dataclasses.dataclass
class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity:
    
    option1: Optional[FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})  
    option2: Optional[FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})  
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest:
    
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    r"""Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails."""  
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    r"""V1 error format."""  
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    r"""OAuth access token."""  
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    r"""Data format for response."""  
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    r"""JSONP"""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Selector specifying which fields to include in a partial response."""  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'names', 'style': 'form', 'explode': True }})
    r"""Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch."""  
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    r"""OAuth 2.0 token for the current user."""  
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    r"""Returns response with indentations and line breaks."""  
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    r"""Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."""  
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    r"""Upload protocol for media (e.g. \\"raw\\", \\"multipart\\")."""  
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    r"""Legacy upload protocol for media (e.g. \\"media\\", \\"multipart\\")."""  
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    google_firebase_appcheck_v1_batch_get_recaptcha_v3_configs_response: Optional[shared_googlefirebaseappcheckv1batchgetrecaptchav3configsresponse.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
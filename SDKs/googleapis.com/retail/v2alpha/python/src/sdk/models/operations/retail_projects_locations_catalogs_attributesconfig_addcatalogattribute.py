"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googlecloudretailv2alphaaddcatalogattributerequest as shared_googlecloudretailv2alphaaddcatalogattributerequest
from ..shared import googlecloudretailv2alphaattributesconfig as shared_googlecloudretailv2alphaattributesconfig
from typing import Optional


@dataclasses.dataclass
class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    oauth2c: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest:
    
    attributes_config: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attributesConfig', 'style': 'simple', 'explode': False }})
    r"""Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`"""  
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
    google_cloud_retail_v2alpha_add_catalog_attribute_request_input: Optional[shared_googlecloudretailv2alphaaddcatalogattributerequest.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."""  
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
class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    google_cloud_retail_v2alpha_attributes_config: Optional[shared_googlecloudretailv2alphaattributesconfig.GoogleCloudRetailV2alphaAttributesConfig] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    
import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import checkresponse as shared_checkresponse


@dataclasses.dataclass
class DigitalassetlinksAssetlinksCheckQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    relation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relation', 'style': 'form', 'explode': True }})
    source_android_app_certificate_sha256_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source.androidApp.certificate.sha256Fingerprint', 'style': 'form', 'explode': True }})
    source_android_app_package_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source.androidApp.packageName', 'style': 'form', 'explode': True }})
    source_web_site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source.web.site', 'style': 'form', 'explode': True }})
    target_android_app_certificate_sha256_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'target.androidApp.certificate.sha256Fingerprint', 'style': 'form', 'explode': True }})
    target_android_app_package_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'target.androidApp.packageName', 'style': 'form', 'explode': True }})
    target_web_site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'target.web.site', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DigitalassetlinksAssetlinksCheckRequest:
    query_params: DigitalassetlinksAssetlinksCheckQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DigitalassetlinksAssetlinksCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_response: Optional[shared_checkresponse.CheckResponse] = dataclasses.field(default=None)
    

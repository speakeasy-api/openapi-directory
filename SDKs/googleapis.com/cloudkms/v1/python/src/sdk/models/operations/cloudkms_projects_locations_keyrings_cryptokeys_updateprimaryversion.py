import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import updatecryptokeyprimaryversionrequest as shared_updatecryptokeyprimaryversionrequest
from ..shared import cryptokey as shared_cryptokey


@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity:
    option1: Optional[CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest:
    path_params: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams = dataclasses.field()
    query_params: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams = dataclasses.field()
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity = dataclasses.field()
    request: Optional[shared_updatecryptokeyprimaryversionrequest.UpdateCryptoKeyPrimaryVersionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crypto_key: Optional[shared_cryptokey.CryptoKey] = dataclasses.field(default=None)
    

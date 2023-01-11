import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import volumes as shared_volumes

class BooksMyconfigSyncVolumeLicensesFeaturesEnum(str, Enum):
    FEATURES_UNDEFINED = "FEATURES_UNDEFINED"
    RENTALS = "RENTALS"


@dataclasses.dataclass
class BooksMyconfigSyncVolumeLicensesQueryParams:
    cpksver: str = dataclasses.field(metadata={'query_param': { 'field_name': 'cpksver', 'style': 'form', 'explode': True }})
    nonce: str = dataclasses.field(metadata={'query_param': { 'field_name': 'nonce', 'style': 'form', 'explode': True }})
    source: str = dataclasses.field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    features: Optional[list[BooksMyconfigSyncVolumeLicensesFeaturesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'features', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_non_comics_series: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeNonComicsSeries', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_preorders: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showPreorders', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'volumeIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksMyconfigSyncVolumeLicensesSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksMyconfigSyncVolumeLicensesRequest:
    query_params: BooksMyconfigSyncVolumeLicensesQueryParams = dataclasses.field()
    security: BooksMyconfigSyncVolumeLicensesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksMyconfigSyncVolumeLicensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volumes: Optional[shared_volumes.Volumes] = dataclasses.field(default=None)
    

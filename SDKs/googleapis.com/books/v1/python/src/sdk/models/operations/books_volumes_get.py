import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import volume as shared_volume


@dataclasses.dataclass
class BooksVolumesGetPathParams:
    volume_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class BooksVolumesGetProjectionEnum(str, Enum):
    PROJECTION_UNDEFINED = "PROJECTION_UNDEFINED"
    FULL = "FULL"
    LITE = "LITE"


@dataclasses.dataclass
class BooksVolumesGetQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_non_comics_series: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeNonComicsSeries', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    partner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[BooksVolumesGetProjectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_library_consistent_read: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_library_consistent_read', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksVolumesGetSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksVolumesGetRequest:
    path_params: BooksVolumesGetPathParams = dataclasses.field()
    query_params: BooksVolumesGetQueryParams = dataclasses.field()
    security: BooksVolumesGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksVolumesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volume: Optional[shared_volume.Volume] = dataclasses.field(default=None)
    

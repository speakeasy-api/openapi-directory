import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class BooksMylibraryBookshelvesAddVolumePathParams:
    shelf: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shelf', 'style': 'simple', 'explode': False }})
    
class BooksMylibraryBookshelvesAddVolumeReasonEnum(str, Enum):
    REASON_UNDEFINED = "REASON_UNDEFINED"
    IOS_PREX = "IOS_PREX"
    IOS_SEARCH = "IOS_SEARCH"
    ONBOARDING = "ONBOARDING"


@dataclasses.dataclass
class BooksMylibraryBookshelvesAddVolumeQueryParams:
    volume_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'volumeId', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    reason: Optional[BooksMylibraryBookshelvesAddVolumeReasonEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BooksMylibraryBookshelvesAddVolumeSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BooksMylibraryBookshelvesAddVolumeRequest:
    path_params: BooksMylibraryBookshelvesAddVolumePathParams = dataclasses.field()
    query_params: BooksMylibraryBookshelvesAddVolumeQueryParams = dataclasses.field()
    security: BooksMylibraryBookshelvesAddVolumeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BooksMylibraryBookshelvesAddVolumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

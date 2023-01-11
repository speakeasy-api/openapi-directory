import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import licensevideorequest as shared_licensevideorequest

class LicenseVideosSizeEnum(str, Enum):
    WEB = "web"
    SD = "sd"
    HD = "hd"
    FOURK = "4k"


@dataclasses.dataclass
class LicenseVideosQueryParams:
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_id', 'style': 'form', 'explode': True }})
    size: Optional[LicenseVideosSizeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscription_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LicenseVideosSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LicenseVideosRequest:
    query_params: LicenseVideosQueryParams = dataclasses.field()
    request: shared_licensevideorequest.LicenseVideoRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LicenseVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LicenseVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_video_result_data_list: Optional[Any] = dataclasses.field(default=None)
    

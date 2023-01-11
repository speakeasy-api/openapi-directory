import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import licenseimagerequest as shared_licenseimagerequest

class LicenseImagesFormatEnum(str, Enum):
    EPS = "eps"
    JPG = "jpg"

class LicenseImagesSizeEnum(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    HUGE = "huge"
    VECTOR = "vector"
    CUSTOM = "custom"


@dataclasses.dataclass
class LicenseImagesQueryParams:
    format: Optional[LicenseImagesFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_id', 'style': 'form', 'explode': True }})
    size: Optional[LicenseImagesSizeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscription_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LicenseImagesSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LicenseImagesRequest:
    query_params: LicenseImagesQueryParams = dataclasses.field()
    request: shared_licenseimagerequest.LicenseImageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LicenseImagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LicenseImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_image_result_data_list: Optional[Any] = dataclasses.field(default=None)
    

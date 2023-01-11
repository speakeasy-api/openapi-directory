import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetImageLicenseListSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetImageLicenseListQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    image_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_id', 'style': 'form', 'explode': True }})
    license: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetImageLicenseListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImageLicenseListSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageLicenseListRequest:
    query_params: GetImageLicenseListQueryParams = dataclasses.field()
    security: GetImageLicenseListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageLicenseListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    download_history_data_list: Optional[Any] = dataclasses.field(default=None)
    

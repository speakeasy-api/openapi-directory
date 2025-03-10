import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialupdatedresults as shared_editorialupdatedresults

class GetUpdatedEditorialImagesSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"

class GetUpdatedEditorialImagesTypeEnum(str, Enum):
    EDIT = "edit"
    ADDITION = "addition"


@dataclasses.dataclass
class GetUpdatedEditorialImagesQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    date_updated_end: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'date_updated_end', 'style': 'form', 'explode': True }})
    date_updated_start: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'date_updated_start', 'style': 'form', 'explode': True }})
    type: GetUpdatedEditorialImagesTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    date_taken_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_taken_end', 'style': 'form', 'explode': True }})
    date_taken_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_taken_start', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetUpdatedEditorialImagesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    supplier_code: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supplier_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdatedEditorialImagesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUpdatedEditorialImagesRequest:
    query_params: GetUpdatedEditorialImagesQueryParams = dataclasses.field()
    security: GetUpdatedEditorialImagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdatedEditorialImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_updated_results: Optional[shared_editorialupdatedresults.EditorialUpdatedResults] = dataclasses.field(default=None)
    

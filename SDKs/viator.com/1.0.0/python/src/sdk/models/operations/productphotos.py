import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import photoobject as shared_photoobject


@dataclasses.dataclass
class ProductPhotosQueryParams:
    code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    show_unavailable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showUnavailable', 'style': 'form', 'explode': True }})
    top_x: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topX', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProductPhotosHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProductPhotos200ApplicationJSON:
    data: Optional[list[shared_photoobject.PhotoObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_stamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateStamp') }})
    error_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCodes') }})
    error_message: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_message_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessageText') }})
    error_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorName') }})
    error_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReference') }})
    error_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    extra_info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraInfo') }})
    extra_object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraObject') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    vmid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmid') }})
    

@dataclasses.dataclass
class ProductPhotosRequest:
    headers: ProductPhotosHeaders = dataclasses.field()
    query_params: ProductPhotosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductPhotosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_photos_200_application_json_object: Optional[ProductPhotos200ApplicationJSON] = dataclasses.field(default=None)
    

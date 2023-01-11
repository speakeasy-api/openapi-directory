import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class BookingVoucherQueryParams:
    embedded_resources: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embeddedResources', 'style': 'form', 'explode': True }})
    full_html: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fullHTML', 'style': 'form', 'explode': True }})
    item_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    lead_last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'leadLastName', 'style': 'form', 'explode': True }})
    mobile_voucher: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mobileVoucher', 'style': 'form', 'explode': True }})
    voucher_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'voucherKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BookingVoucherHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BookingVoucher200ApplicationJSON:
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingVoucherRequest:
    headers: BookingVoucherHeaders = dataclasses.field()
    query_params: BookingVoucherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BookingVoucherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_voucher_200_application_json_object: Optional[BookingVoucher200ApplicationJSON] = dataclasses.field(default=None)
    

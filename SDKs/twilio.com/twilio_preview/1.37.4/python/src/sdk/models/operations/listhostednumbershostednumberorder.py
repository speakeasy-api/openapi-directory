import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hosted_number_order_enum_status_enum as shared_hosted_number_order_enum_status_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_hosted_number_order as shared_preview_hosted_numbers_hosted_number_order


LIST_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    incoming_phone_number_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncomingPhoneNumberSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    status: Optional[shared_hosted_number_order_enum_status_enum.HostedNumberOrderEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UniqueName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse:
    items: Optional[list[shared_preview_hosted_numbers_hosted_number_order.PreviewHostedNumbersHostedNumberOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderRequest:
    query_params: ListHostedNumbersHostedNumberOrderQueryParams = dataclasses.field()
    security: ListHostedNumbersHostedNumberOrderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListHostedNumbersHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hosted_numbers_hosted_number_order_response: Optional[ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse] = dataclasses.field(default=None)
    

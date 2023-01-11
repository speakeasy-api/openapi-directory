import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dependent_hosted_number_order_enum_status_enum as shared_dependent_hosted_number_order_enum_status_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_authorization_document_dependent_hosted_number_order as shared_preview_hosted_numbers_authorization_document_dependent_hosted_number_order


LIST_HOSTED_NUMBERS_DEPENDENT_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderPathParams:
    signing_document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SigningDocumentSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    incoming_phone_number_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IncomingPhoneNumberSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    status: Optional[shared_dependent_hosted_number_order_enum_status_enum.DependentHostedNumberOrderEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UniqueName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse:
    items: Optional[list[shared_preview_hosted_numbers_authorization_document_dependent_hosted_number_order.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderRequest:
    path_params: ListHostedNumbersDependentHostedNumberOrderPathParams = dataclasses.field()
    query_params: ListHostedNumbersDependentHostedNumberOrderQueryParams = dataclasses.field()
    security: ListHostedNumbersDependentHostedNumberOrderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListHostedNumbersDependentHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hosted_numbers_dependent_hosted_number_order_response: Optional[ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse] = dataclasses.field(default=None)
    

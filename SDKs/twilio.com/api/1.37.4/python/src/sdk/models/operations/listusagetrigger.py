import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage_trigger_enum_recurring_enum as shared_usage_trigger_enum_recurring_enum
from ..shared import usage_trigger_enum_trigger_field_enum as shared_usage_trigger_enum_trigger_field_enum
from ..shared import usage_trigger_enum_usage_category_enum as shared_usage_trigger_enum_usage_category_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_trigger as shared_api_v2010_account_usage_usage_trigger


LIST_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListUsageTriggerPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUsageTriggerQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    recurring: Optional[shared_usage_trigger_enum_recurring_enum.UsageTriggerEnumRecurringEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Recurring', 'style': 'form', 'explode': True }})
    trigger_by: Optional[shared_usage_trigger_enum_trigger_field_enum.UsageTriggerEnumTriggerFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TriggerBy', 'style': 'form', 'explode': True }})
    usage_category: Optional[shared_usage_trigger_enum_usage_category_enum.UsageTriggerEnumUsageCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UsageCategory', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsageTriggerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsageTriggerListUsageTriggerResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage_triggers: Optional[list[shared_api_v2010_account_usage_usage_trigger.APIV2010AccountUsageUsageTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_triggers') }})
    

@dataclasses.dataclass
class ListUsageTriggerRequest:
    path_params: ListUsageTriggerPathParams = dataclasses.field()
    query_params: ListUsageTriggerQueryParams = dataclasses.field()
    security: ListUsageTriggerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsageTriggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_usage_trigger_response: Optional[ListUsageTriggerListUsageTriggerResponse] = dataclasses.field(default=None)
    

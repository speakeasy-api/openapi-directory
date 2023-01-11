import dataclasses
from typing import Optional
from enum import Enum
from ..shared import usage_trigger_enum_recurring_enum as shared_usage_trigger_enum_recurring_enum
from ..shared import usage_trigger_enum_trigger_field_enum as shared_usage_trigger_enum_trigger_field_enum
from ..shared import usage_trigger_enum_usage_category_enum as shared_usage_trigger_enum_usage_category_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_trigger as shared_api_v2010_account_usage_usage_trigger


CREATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateUsageTriggerPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateUsageTriggerCreateUsageTriggerRequest:
    callback_url: str = dataclasses.field(metadata={'form': { 'field_name': 'CallbackUrl' }})
    trigger_value: str = dataclasses.field(metadata={'form': { 'field_name': 'TriggerValue' }})
    usage_category: shared_usage_trigger_enum_usage_category_enum.UsageTriggerEnumUsageCategoryEnum = dataclasses.field(metadata={'form': { 'field_name': 'UsageCategory' }})
    callback_method: Optional[CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    recurring: Optional[shared_usage_trigger_enum_recurring_enum.UsageTriggerEnumRecurringEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Recurring' }})
    trigger_by: Optional[shared_usage_trigger_enum_trigger_field_enum.UsageTriggerEnumTriggerFieldEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TriggerBy' }})
    

@dataclasses.dataclass
class CreateUsageTriggerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUsageTriggerRequest:
    path_params: CreateUsageTriggerPathParams = dataclasses.field()
    security: CreateUsageTriggerSecurity = dataclasses.field()
    request: Optional[CreateUsageTriggerCreateUsageTriggerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUsageTriggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_usage_usage_trigger: Optional[shared_api_v2010_account_usage_usage_trigger.APIV2010AccountUsageUsageTrigger] = dataclasses.field(default=None)
    

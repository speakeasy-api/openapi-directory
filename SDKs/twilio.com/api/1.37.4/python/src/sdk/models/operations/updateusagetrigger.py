import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_trigger as shared_api_v2010_account_usage_usage_trigger


UPDATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateUsageTriggerPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateUsageTriggerUpdateUsageTriggerRequest:
    callback_method: Optional[UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateUsageTriggerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUsageTriggerRequest:
    path_params: UpdateUsageTriggerPathParams = dataclasses.field()
    security: UpdateUsageTriggerSecurity = dataclasses.field()
    request: Optional[UpdateUsageTriggerUpdateUsageTriggerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUsageTriggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_usage_usage_trigger: Optional[shared_api_v2010_account_usage_usage_trigger.APIV2010AccountUsageUsageTrigger] = dataclasses.field(default=None)
    

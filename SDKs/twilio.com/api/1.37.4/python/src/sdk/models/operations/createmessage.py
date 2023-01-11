import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import message_enum_address_retention_enum as shared_message_enum_address_retention_enum
from ..shared import message_enum_content_retention_enum as shared_message_enum_content_retention_enum
from ..shared import message_enum_schedule_type_enum as shared_message_enum_schedule_type_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_message as shared_api_v2010_account_message


CREATE_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateMessagePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageCreateMessageRequest:
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    address_retention: Optional[shared_message_enum_address_retention_enum.MessageEnumAddressRetentionEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressRetention' }})
    application_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    attempt: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attempt' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    content_retention: Optional[shared_message_enum_content_retention_enum.MessageEnumContentRetentionEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContentRetention' }})
    content_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContentSid' }})
    content_variables: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContentVariables' }})
    force_delivery: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ForceDelivery' }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'From' }})
    max_price: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxPrice' }})
    media_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MediaUrl' }})
    messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    persistent_action: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PersistentAction' }})
    provide_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ProvideFeedback' }})
    schedule_type: Optional[shared_message_enum_schedule_type_enum.MessageEnumScheduleTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ScheduleType' }})
    send_as_mms: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SendAsMms' }})
    send_at: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SendAt' }})
    shorten_urls: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ShortenUrls' }})
    smart_encoded: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmartEncoded' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    validity_period: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ValidityPeriod' }})
    

@dataclasses.dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessageRequest:
    path_params: CreateMessagePathParams = dataclasses.field()
    security: CreateMessageSecurity = dataclasses.field()
    request: Optional[CreateMessageCreateMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_message: Optional[shared_api_v2010_account_message.APIV2010AccountMessage] = dataclasses.field(default=None)
    

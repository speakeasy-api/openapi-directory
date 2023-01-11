import dataclasses
from typing import Optional
from enum import Enum
from ..shared import binding_enum_binding_type_enum as shared_binding_enum_binding_type_enum
from ..shared import security as shared_security
from ..shared import notify_v1_service_binding as shared_notify_v1_service_binding


CREATE_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclasses.dataclass
class CreateBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBindingCreateBindingRequest:
    address: str = dataclasses.field(metadata={'form': { 'field_name': 'Address' }})
    binding_type: shared_binding_enum_binding_type_enum.BindingEnumBindingTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'BindingType' }})
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CredentialSid' }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Endpoint' }})
    notification_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NotificationProtocolVersion' }})
    tag: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Tag' }})
    

@dataclasses.dataclass
class CreateBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBindingRequest:
    path_params: CreateBindingPathParams = dataclasses.field()
    security: CreateBindingSecurity = dataclasses.field()
    request: Optional[CreateBindingCreateBindingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notify_v1_service_binding: Optional[shared_notify_v1_service_binding.NotifyV1ServiceBinding] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from enum import Enum
from ..shared import service_enum_scan_message_content_enum as shared_service_enum_scan_message_content_enum
from ..shared import security as shared_security
from ..shared import messaging_v1_service as shared_messaging_v1_service


CREATE_SERVICE_SERVERS = [
	"https://messaging.twilio.com",
]

class CreateServiceCreateServiceRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateServiceCreateServiceRequestInboundMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    area_code_geomatch: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AreaCodeGeomatch' }})
    fallback_method: Optional[CreateServiceCreateServiceRequestFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_to_long_code: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackToLongCode' }})
    fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    inbound_method: Optional[CreateServiceCreateServiceRequestInboundMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InboundMethod' }})
    inbound_request_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InboundRequestUrl' }})
    mms_converter: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MmsConverter' }})
    scan_message_content: Optional[shared_service_enum_scan_message_content_enum.ServiceEnumScanMessageContentEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ScanMessageContent' }})
    smart_encoding: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmartEncoding' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    sticky_sender: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StickySender' }})
    synchronous_validation: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SynchronousValidation' }})
    use_inbound_webhook_on_number: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UseInboundWebhookOnNumber' }})
    usecase: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Usecase' }})
    validity_period: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ValidityPeriod' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service: Optional[shared_messaging_v1_service.MessagingV1Service] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_enum_geo_match_level_enum as shared_service_enum_geo_match_level_enum
from ..shared import service_enum_number_selection_behavior_enum as shared_service_enum_number_selection_behavior_enum
from ..shared import security as shared_security
from ..shared import proxy_v1_service as shared_proxy_v1_service


UPDATE_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class UpdateServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUpdateServiceRequest:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    chat_instance_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChatInstanceSid' }})
    default_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultTtl' }})
    geo_match_level: Optional[shared_service_enum_geo_match_level_enum.ServiceEnumGeoMatchLevelEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'GeoMatchLevel' }})
    intercept_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InterceptCallbackUrl' }})
    number_selection_behavior: Optional[shared_service_enum_number_selection_behavior_enum.ServiceEnumNumberSelectionBehaviorEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NumberSelectionBehavior' }})
    out_of_session_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'OutOfSessionCallbackUrl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = dataclasses.field()
    security: UpdateServiceSecurity = dataclasses.field()
    request: Optional[UpdateServiceUpdateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service: Optional[shared_proxy_v1_service.ProxyV1Service] = dataclasses.field(default=None)
    

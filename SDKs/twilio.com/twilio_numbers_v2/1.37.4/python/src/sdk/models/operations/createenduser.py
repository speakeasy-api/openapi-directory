import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import end_user_enum_type_enum as shared_end_user_enum_type_enum
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_end_user as shared_numbers_v2_regulatory_compliance_end_user


CREATE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateEndUserCreateEndUserRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    type: shared_end_user_enum_type_enum.EndUserEnumTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclasses.dataclass
class CreateEndUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEndUserRequest:
    security: CreateEndUserSecurity = dataclasses.field()
    request: Optional[CreateEndUserCreateEndUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEndUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_end_user: Optional[shared_numbers_v2_regulatory_compliance_end_user.NumbersV2RegulatoryComplianceEndUser] = dataclasses.field(default=None)
    

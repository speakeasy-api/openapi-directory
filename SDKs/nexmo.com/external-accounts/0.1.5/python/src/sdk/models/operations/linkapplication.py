import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import four_hundred_and_oneresponse as shared_four_hundred_and_oneresponse
from ..shared import accountresponse as shared_accountresponse

class LinkApplicationProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclasses.dataclass
class LinkApplicationPathParams:
    external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: LinkApplicationProviderEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class LinkApplicationRequestBody:
    application: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    

@dataclasses.dataclass
class LinkApplicationSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class LinkApplication403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class LinkApplication409ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class LinkApplicationRequest:
    path_params: LinkApplicationPathParams = dataclasses.field()
    request: LinkApplicationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LinkApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LinkApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_response: Optional[shared_four_hundred_and_oneresponse.FourHundredAndOneResponse] = dataclasses.field(default=None)
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    link_application_403_application_json_object: Optional[LinkApplication403ApplicationJSON] = dataclasses.field(default=None)
    link_application_409_application_json_object: Optional[LinkApplication409ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import modifysubaccountrequest as shared_modifysubaccountrequest
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class ModifySubaccountPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    subaccount_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subaccount_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifySubaccountSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ModifySubaccount401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ModifySubaccount404ApplicationJSON:
    r"""ModifySubaccount404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ModifySubaccount422ApplicationJSONInvalidParameters:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class ModifySubaccount422ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: list[ModifySubaccount422ApplicationJSONInvalidParameters] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class ModifySubaccountRequest:
    path_params: ModifySubaccountPathParams = dataclasses.field()
    request: shared_modifysubaccountrequest.ModifySubaccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ModifySubaccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ModifySubaccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subaccount_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    modify_subaccount_401_application_json_object: Optional[ModifySubaccount401ApplicationJSON] = dataclasses.field(default=None)
    modify_subaccount_404_application_json_object: Optional[ModifySubaccount404ApplicationJSON] = dataclasses.field(default=None)
    modify_subaccount_422_application_json_object: Optional[ModifySubaccount422ApplicationJSON] = dataclasses.field(default=None)
    

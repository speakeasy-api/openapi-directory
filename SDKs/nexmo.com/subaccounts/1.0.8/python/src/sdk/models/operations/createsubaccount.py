import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import newsubaccountrequest as shared_newsubaccountrequest
from ..shared import subaccountcreateresponse as shared_subaccountcreateresponse
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class CreateSubAccountPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSubAccountSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubAccount401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubAccount404ApplicationJSON:
    r"""CreateSubAccount404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubAccount422ApplicationJSONInvalidParameters:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubAccount422ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: list[CreateSubAccount422ApplicationJSONInvalidParameters] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class CreateSubAccountRequest:
    path_params: CreateSubAccountPathParams = dataclasses.field()
    request: shared_newsubaccountrequest.NewSubaccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSubAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateSubAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subaccount_create_response: Optional[shared_subaccountcreateresponse.SubaccountCreateResponse] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    create_sub_account_401_application_json_object: Optional[CreateSubAccount401ApplicationJSON] = dataclasses.field(default=None)
    create_sub_account_404_application_json_object: Optional[CreateSubAccount404ApplicationJSON] = dataclasses.field(default=None)
    create_sub_account_422_application_json_object: Optional[CreateSubAccount422ApplicationJSON] = dataclasses.field(default=None)
    

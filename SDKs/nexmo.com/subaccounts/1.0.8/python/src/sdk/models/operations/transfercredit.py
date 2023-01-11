import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import transferbalanceorcreditrequest as shared_transferbalanceorcreditrequest
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class TransferCreditPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransferCreditSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class TransferCredit401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferCredit404ApplicationJSON:
    r"""TransferCredit404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferCredit422ApplicationJSONInvalidParameters:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferCredit422ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: list[TransferCredit422ApplicationJSONInvalidParameters] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class TransferCreditRequest:
    path_params: TransferCreditPathParams = dataclasses.field()
    request: shared_transferbalanceorcreditrequest.TransferBalanceOrCreditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: TransferCreditSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TransferCreditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transfer_credit_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    transfer_credit_401_application_json_object: Optional[TransferCredit401ApplicationJSON] = dataclasses.field(default=None)
    transfer_credit_404_application_json_object: Optional[TransferCredit404ApplicationJSON] = dataclasses.field(default=None)
    transfer_credit_422_application_json_object: Optional[TransferCredit422ApplicationJSON] = dataclasses.field(default=None)
    

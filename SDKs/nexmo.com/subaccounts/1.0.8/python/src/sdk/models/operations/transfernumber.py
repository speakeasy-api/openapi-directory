import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import transfernumberrequest as shared_transfernumberrequest
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse
from ..shared import invalidnumbertransfererrorresponse as shared_invalidnumbertransfererrorresponse
from ..shared import schema as shared_schema
from ..shared import shortcodenotfound as shared_shortcodenotfound


@dataclasses.dataclass
class TransferNumberPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransferNumberSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class TransferNumber401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferNumber409ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferNumber422ApplicationJSONInvalidParameters:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class TransferNumber422ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: list[TransferNumber422ApplicationJSONInvalidParameters] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class TransferNumberRequest:
    path_params: TransferNumberPathParams = dataclasses.field()
    request: shared_transfernumberrequest.TransferNumberRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: TransferNumberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TransferNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transfer_number_response: Optional[Any] = dataclasses.field(default=None)
    transfer_number_401_application_json_object: Optional[TransferNumber401ApplicationJSON] = dataclasses.field(default=None)
    transfer_number_403_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    transfer_number_404_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    transfer_number_409_application_json_object: Optional[TransferNumber409ApplicationJSON] = dataclasses.field(default=None)
    transfer_number_422_application_json_object: Optional[TransferNumber422ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capabilities as shared_capabilities


@dataclass_json
@dataclasses.dataclass
class CreateApplication201ApplicationJSONKeys:
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateApplication201ApplicationJSONPrivacy:
    r"""CreateApplication201ApplicationJSONPrivacy
    Application privacy config
    """
    
    improve_ai: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('improve_ai') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateApplication201ApplicationJSON:
    capabilities: Optional[shared_capabilities.Capabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keys: Optional[CreateApplication201ApplicationJSONKeys] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: Optional[CreateApplication201ApplicationJSONPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclasses.dataclass
class CreateApplicationRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_application_201_application_json_object: Optional[CreateApplication201ApplicationJSON] = dataclasses.field(default=None)
    create_application_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_application_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_application_405_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_application_406_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_application_415_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

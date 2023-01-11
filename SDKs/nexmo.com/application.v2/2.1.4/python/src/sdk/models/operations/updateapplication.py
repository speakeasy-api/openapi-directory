import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capabilities as shared_capabilities


@dataclasses.dataclass
class UpdateApplicationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateApplication200ApplicationJSONKeys:
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateApplication200ApplicationJSONPrivacy:
    r"""UpdateApplication200ApplicationJSONPrivacy
    Application privacy config
    """
    
    improve_ai: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('improve_ai') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateApplication200ApplicationJSON:
    capabilities: Optional[shared_capabilities.Capabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keys: Optional[UpdateApplication200ApplicationJSONKeys] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: Optional[UpdateApplication200ApplicationJSONPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclasses.dataclass
class UpdateApplicationRequest:
    path_params: UpdateApplicationPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_application_200_application_json_object: Optional[UpdateApplication200ApplicationJSON] = dataclasses.field(default=None)
    update_application_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_application_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_application_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_application_405_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_application_406_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_application_415_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

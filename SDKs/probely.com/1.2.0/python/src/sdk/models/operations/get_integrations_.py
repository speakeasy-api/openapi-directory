import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrations as shared_integrations


@dataclass_json
@dataclasses.dataclass
class GetIntegrations401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrations403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetIntegrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integrations: Optional[shared_integrations.Integrations] = dataclasses.field(default=None)
    get_integrations_401_application_json_object: Optional[GetIntegrations401ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_403_application_json_object: Optional[GetIntegrations403ApplicationJSON] = dataclasses.field(default=None)
    

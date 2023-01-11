import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CloneOrganizationSwitchDevicesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CloneOrganizationSwitchDevicesRequestBody:
    source_serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSerial') }})
    target_serials: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSerials') }})
    

@dataclasses.dataclass
class CloneOrganizationSwitchDevicesRequest:
    path_params: CloneOrganizationSwitchDevicesPathParams = dataclasses.field()
    request: CloneOrganizationSwitchDevicesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CloneOrganizationSwitchDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clone_organization_switch_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationNetworkPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationNetworkRequestBodyProductTypesEnum(str, Enum):
    WIRELESS = "wireless"
    APPLIANCE = "appliance"
    SWITCH = "switch"
    SYSTEMS_MANAGER = "systemsManager"
    CAMERA = "camera"
    CELLULAR_GATEWAY = "cellularGateway"
    SENSOR = "sensor"
    ENVIRONMENTAL = "environmental"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationNetworkRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_types: list[CreateOrganizationNetworkRequestBodyProductTypesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    copy_from_network_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyFromNetworkId') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclasses.dataclass
class CreateOrganizationNetworkRequest:
    path_params: CreateOrganizationNetworkPathParams = dataclasses.field()
    request: CreateOrganizationNetworkRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_network_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

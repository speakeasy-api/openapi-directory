import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CombineOrganizationNetworksPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CombineOrganizationNetworksRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkIds') }})
    enrollment_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentString') }})
    

@dataclasses.dataclass
class CombineOrganizationNetworksRequest:
    path_params: CombineOrganizationNetworksPathParams = dataclasses.field()
    request: CombineOrganizationNetworksRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CombineOrganizationNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    combine_organization_networks_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationInventoryDevicePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationInventoryDeviceRequest:
    path_params: GetOrganizationInventoryDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationInventoryDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_inventory_device_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

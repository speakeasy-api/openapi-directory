import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetOrganizationInventoryDevicesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationInventoryDevicesUsedStateEnum(str, Enum):
    USED = "used"
    UNUSED = "unused"


@dataclasses.dataclass
class GetOrganizationInventoryDevicesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    used_state: Optional[GetOrganizationInventoryDevicesUsedStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'usedState', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationInventoryDevicesRequest:
    path_params: GetOrganizationInventoryDevicesPathParams = dataclasses.field()
    query_params: GetOrganizationInventoryDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationInventoryDevicesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_inventory_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

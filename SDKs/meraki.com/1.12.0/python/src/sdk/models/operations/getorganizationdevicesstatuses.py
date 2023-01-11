import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationDevicesStatusesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationDevicesStatusesQueryParams:
    components: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationDevicesStatusesRequest:
    path_params: GetOrganizationDevicesStatusesPathParams = dataclasses.field()
    query_params: GetOrganizationDevicesStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationDevicesStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_devices_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

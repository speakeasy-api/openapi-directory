import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationUplinksStatusesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationUplinksStatusesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    iccids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iccids', 'style': 'form', 'explode': False }})
    network_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationUplinksStatusesRequest:
    path_params: GetOrganizationUplinksStatusesPathParams = dataclasses.field()
    query_params: GetOrganizationUplinksStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationUplinksStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_uplinks_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

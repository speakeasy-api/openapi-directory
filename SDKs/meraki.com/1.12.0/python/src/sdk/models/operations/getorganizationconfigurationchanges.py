import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationConfigurationChangesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigurationChangesQueryParams:
    admin_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adminId', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    network_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'networkId', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationConfigurationChangesRequest:
    path_params: GetOrganizationConfigurationChangesPathParams = dataclasses.field()
    query_params: GetOrganizationConfigurationChangesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationConfigurationChangesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_configuration_changes_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

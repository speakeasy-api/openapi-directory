import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewQueryParams:
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewRequest:
    path_params: GetOrganizationAPIRequestsOverviewPathParams = dataclasses.field()
    query_params: GetOrganizationAPIRequestsOverviewQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsOverviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_api_requests_overview_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

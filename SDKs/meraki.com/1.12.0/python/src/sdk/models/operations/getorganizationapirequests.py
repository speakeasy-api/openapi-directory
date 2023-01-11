import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAPIRequestsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsQueryParams:
    admin_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adminId', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'method', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    response_code: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responseCode', 'style': 'form', 'explode': True }})
    source_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceIp', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsRequest:
    path_params: GetOrganizationAPIRequestsPathParams = dataclasses.field()
    query_params: GetOrganizationAPIRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAPIRequestsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_api_requests_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

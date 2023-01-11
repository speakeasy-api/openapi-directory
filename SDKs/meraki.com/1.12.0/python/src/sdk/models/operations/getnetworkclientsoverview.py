import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkClientsOverviewPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkClientsOverviewQueryParams:
    resolution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkClientsOverviewRequest:
    path_params: GetNetworkClientsOverviewPathParams = dataclasses.field()
    query_params: GetNetworkClientsOverviewQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkClientsOverviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_clients_overview_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

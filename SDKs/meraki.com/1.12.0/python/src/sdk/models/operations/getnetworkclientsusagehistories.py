import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkClientsUsageHistoriesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkClientsUsageHistoriesQueryParams:
    clients: str = dataclasses.field(metadata={'query_param': { 'field_name': 'clients', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkClientsUsageHistoriesRequest:
    path_params: GetNetworkClientsUsageHistoriesPathParams = dataclasses.field()
    query_params: GetNetworkClientsUsageHistoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkClientsUsageHistoriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_clients_usage_histories_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

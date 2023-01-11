import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDevicesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': False }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    wifi_macs: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'wifiMacs', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDevicesRequest:
    path_params: GetNetworkSmDevicesPathParams = dataclasses.field()
    query_params: GetNetworkSmDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDevicesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

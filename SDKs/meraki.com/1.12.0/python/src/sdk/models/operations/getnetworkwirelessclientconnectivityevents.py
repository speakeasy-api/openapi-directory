import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkWirelessClientConnectivityEventsPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessClientConnectivityEventsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"

class GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum(str, Enum):
    GOOD = "good"
    INFO = "info"
    WARN = "warn"
    BAD = "bad"

class GetNetworkWirelessClientConnectivityEventsTypesEnum(str, Enum):
    ASSOC = "assoc"
    DISASSOC = "disassoc"
    AUTH = "auth"
    DEAUTH = "deauth"
    DNS = "dns"
    DHCP = "dhcp"
    ROAM = "roam"
    CONNECTION = "connection"
    STICKY = "sticky"


@dataclasses.dataclass
class GetNetworkWirelessClientConnectivityEventsQueryParams:
    band: Optional[GetNetworkWirelessClientConnectivityEventsBandEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    included_severities: Optional[list[GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includedSeverities', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    types: Optional[list[GetNetworkWirelessClientConnectivityEventsTypesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessClientConnectivityEventsRequest:
    path_params: GetNetworkWirelessClientConnectivityEventsPathParams = dataclasses.field()
    query_params: GetNetworkWirelessClientConnectivityEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessClientConnectivityEventsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_client_connectivity_events_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

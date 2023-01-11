import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations:
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody:
    destinations: Optional[list[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest:
    path_params: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

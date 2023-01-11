import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkCellularGatewaySubnetPoolPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequestBody:
    cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    mask: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mask') }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequest:
    path_params: UpdateNetworkCellularGatewaySubnetPoolPathParams = dataclasses.field()
    request: Optional[UpdateNetworkCellularGatewaySubnetPoolRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewaySubnetPoolResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_cellular_gateway_subnet_pool_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

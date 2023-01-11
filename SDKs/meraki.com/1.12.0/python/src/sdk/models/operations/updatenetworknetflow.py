import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkNetflowPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkNetflowRequestBody:
    collector_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorIp') }})
    collector_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorPort') }})
    eta_dst_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaDstPort') }})
    eta_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaEnabled') }})
    reporting_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingEnabled') }})
    

@dataclasses.dataclass
class UpdateNetworkNetflowRequest:
    path_params: UpdateNetworkNetflowPathParams = dataclasses.field()
    request: Optional[UpdateNetworkNetflowRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkNetflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_netflow_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

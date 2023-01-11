import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum(str, Enum):
    NORMAL = "normal"
    STUB = "stub"
    NSSA = "nssa"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyAreas:
    area_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaId') }})
    area_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaName') }})
    area_type: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaType') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey:
    r"""UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
    MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    passphrase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfRequestBody:
    areas: Optional[list[UpdateNetworkSwitchRoutingOspfRequestBodyAreas]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areas') }})
    dead_timer_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadTimerInSeconds') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    hello_timer_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helloTimerInSeconds') }})
    md5_authentication_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5AuthenticationEnabled') }})
    md5_authentication_key: Optional[UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5AuthenticationKey') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfRequest:
    path_params: UpdateNetworkSwitchRoutingOspfPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchRoutingOspfRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingOspfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

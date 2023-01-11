import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchDscpToCosMappingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings:
    cos: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cos') }})
    dscp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBody:
    mappings: list[UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequest:
    path_params: UpdateNetworkSwitchDscpToCosMappingsPathParams = dataclasses.field()
    request: UpdateNetworkSwitchDscpToCosMappingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchDscpToCosMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_dscp_to_cos_mappings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

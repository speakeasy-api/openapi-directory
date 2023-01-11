import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceVlansSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVlansSettingsRequestBody:
    vlans_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlansEnabled') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVlansSettingsRequest:
    path_params: UpdateNetworkApplianceVlansSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceVlansSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVlansSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_vlans_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

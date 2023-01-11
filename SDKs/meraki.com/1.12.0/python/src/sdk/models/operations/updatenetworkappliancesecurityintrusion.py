import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum(str, Enum):
    CONNECTIVITY = "connectivity"
    BALANCED = "balanced"
    SECURITY = "security"

class UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum(str, Enum):
    PREVENTION = "prevention"
    DETECTION = "detection"
    DISABLED = "disabled"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks:
    r"""UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
    Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
    """
    
    excluded_cidr: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedCidr') }})
    included_cidr: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCidr') }})
    use_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefault') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceSecurityIntrusionRequestBody:
    ids_rulesets: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idsRulesets') }})
    mode: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    protected_networks: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedNetworks') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceSecurityIntrusionRequest:
    path_params: UpdateNetworkApplianceSecurityIntrusionPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceSecurityIntrusionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

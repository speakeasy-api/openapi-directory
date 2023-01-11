import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum(str, Enum):
    WIRELESS = "wireless"
    SWITCH = "switch"
    APPLIANCE = "appliance"
    CAMERA = "camera"
    VMX_HOST = "vmxHost"
    CELLULAR_GATEWAY = "cellularGateway"

class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum(str, Enum):
    PERFORMANCE = "performance"
    STABILITY = "stability"
    BROKE_OLD_FEATURES = "broke old features"
    UNIFYING_NETWORKS_VERSIONS = "unifying networks versions"
    TESTING = "testing"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons:
    category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion:
    r"""CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
    Version to downgrade to (if the network has firmware flexibility)
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBody:
    reasons: list[CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    product: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_version: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackRequest:
    path_params: CreateNetworkFirmwareUpgradesRollbackPathParams = dataclasses.field()
    request: CreateNetworkFirmwareUpgradesRollbackRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkFirmwareUpgradesRollbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_firmware_upgrades_rollback_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

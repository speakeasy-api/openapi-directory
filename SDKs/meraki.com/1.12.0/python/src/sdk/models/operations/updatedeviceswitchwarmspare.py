import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceSwitchWarmSparePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchWarmSpareRequestBody:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    spare_serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spareSerial') }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchWarmSpareRequest:
    path_params: UpdateDeviceSwitchWarmSparePathParams = dataclasses.field()
    request: UpdateDeviceSwitchWarmSpareRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchWarmSpareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_switch_warm_spare_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

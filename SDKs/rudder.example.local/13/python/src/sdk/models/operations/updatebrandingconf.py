import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branding_conf as shared_branding_conf

class UpdateBRandingConf200ApplicationJSONActionEnum(str, Enum):
    UPDATE_B_RANDING_CONF = "updateBRandingConf"


@dataclass_json
@dataclasses.dataclass
class UpdateBRandingConf200ApplicationJSONData:
    branding: shared_branding_conf.BrandingConf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branding') }})
    
class UpdateBRandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateBRandingConf200ApplicationJSON:
    action: UpdateBRandingConf200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateBRandingConf200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateBRandingConf200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateBRandingConfRequest:
    request: shared_branding_conf.BrandingConf = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateBRandingConfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_b_randing_conf_200_application_json_object: Optional[UpdateBRandingConf200ApplicationJSON] = dataclasses.field(default=None)
    

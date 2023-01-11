import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branding_conf as shared_branding_conf

class GetBrandingConf200ApplicationJSONActionEnum(str, Enum):
    GET_BRANDING_CONF = "getBrandingConf"


@dataclass_json
@dataclasses.dataclass
class GetBrandingConf200ApplicationJSONData:
    branding: shared_branding_conf.BrandingConf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branding') }})
    
class GetBrandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetBrandingConf200ApplicationJSON:
    action: GetBrandingConf200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetBrandingConf200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetBrandingConf200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetBrandingConfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_branding_conf_200_application_json_object: Optional[GetBrandingConf200ApplicationJSON] = dataclasses.field(default=None)
    

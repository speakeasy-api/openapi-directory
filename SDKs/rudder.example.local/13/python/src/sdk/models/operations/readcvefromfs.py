import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReadCvEfromFs200ApplicationJSONActionEnum(str, Enum):
    READ_CV_EFROM_FS = "readCVEfromFS"


@dataclass_json
@dataclasses.dataclass
class ReadCvEfromFs200ApplicationJSONData:
    cv_es: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class ReadCvEfromFs200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReadCvEfromFs200ApplicationJSON:
    action: ReadCvEfromFs200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReadCvEfromFs200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReadCvEfromFs200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReadCvEfromFsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    read_cv_efrom_fs_200_application_json_object: Optional[ReadCvEfromFs200ApplicationJSON] = dataclasses.field(default=None)
    

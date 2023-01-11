import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cvedetails as shared_cvedetails


@dataclass_json
@dataclasses.dataclass
class GetCveListRequestBody:
    r"""GetCveListRequestBody
    cveList
    """
    
    cve_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cveIds') }})
    
class GetCveList200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_LIST = "getCVEList"


@dataclass_json
@dataclasses.dataclass
class GetCveList200ApplicationJSONData:
    cv_es: list[shared_cvedetails.CveDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class GetCveList200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetCveList200ApplicationJSON:
    action: GetCveList200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetCveList200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetCveList200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetCveListRequest:
    request: Optional[GetCveListRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCveListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_cve_list_200_application_json_object: Optional[GetCveList200ApplicationJSON] = dataclasses.field(default=None)
    

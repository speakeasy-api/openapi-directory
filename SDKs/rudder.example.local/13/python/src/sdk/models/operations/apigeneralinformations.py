import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_versions as shared_api_versions
from ..shared import api_endpoints as shared_api_endpoints

class APIGeneralInformations200ApplicationJSONActionEnum(str, Enum):
    API_GENERAL_INFORMATIONS = "apiGeneralInformations"


@dataclass_json
@dataclasses.dataclass
class APIGeneralInformations200ApplicationJSONData:
    available_versions: list[shared_api_versions.APIVersions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    documentation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: list[list[shared_api_endpoints.APIEndpoints]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APIGeneralInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class APIGeneralInformations200ApplicationJSON:
    action: APIGeneralInformations200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APIGeneralInformations200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APIGeneralInformations200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class APIGeneralInformationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_general_informations_200_application_json_object: Optional[APIGeneralInformations200ApplicationJSON] = dataclasses.field(default=None)
    

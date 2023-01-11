import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_versions as shared_api_versions
from ..shared import api_endpoints as shared_api_endpoints


@dataclasses.dataclass
class APISubInformationsPathParams:
    section_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    
class APISubInformations200ApplicationJSONActionEnum(str, Enum):
    API_SUB_INFORMATIONS = "apiSubInformations"


@dataclass_json
@dataclasses.dataclass
class APISubInformations200ApplicationJSONData:
    available_versions: list[shared_api_versions.APIVersions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    documentation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: list[list[shared_api_endpoints.APIEndpoints]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APISubInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class APISubInformations200ApplicationJSON:
    action: APISubInformations200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APISubInformations200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APISubInformations200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class APISubInformationsRequest:
    path_params: APISubInformationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class APISubInformationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_sub_informations_200_application_json_object: Optional[APISubInformations200ApplicationJSON] = dataclasses.field(default=None)
    

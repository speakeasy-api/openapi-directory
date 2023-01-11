import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_version as shared_api_version


@dataclasses.dataclass
class APIInformationsPathParams:
    endpoint_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'endpointName', 'style': 'simple', 'explode': False }})
    
class APIInformations200ApplicationJSONActionEnum(str, Enum):
    API_INFORMATIONS = "apiInformations"


@dataclass_json
@dataclasses.dataclass
class APIInformations200ApplicationJSONDataEndpoints:
    r"""APIInformations200ApplicationJSONDataEndpoints
    Supported path and version for that endpoint
    """
    
    http_verb: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpVerb') }})
    version: Optional[shared_api_version.APIVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class APIInformations200ApplicationJSONData:
    documentation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoint_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointName') }})
    endpoints: list[APIInformations200ApplicationJSONDataEndpoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APIInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class APIInformations200ApplicationJSON:
    action: APIInformations200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APIInformations200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APIInformations200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class APIInformationsRequest:
    path_params: APIInformationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class APIInformationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_informations_200_application_json_object: Optional[APIInformations200ApplicationJSON] = dataclasses.field(default=None)
    

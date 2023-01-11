import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAPIV2ListFederationsHeaders:
    x_rapid_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2ListFederations200ApplicationJSON:
    data: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2ListFederations404ApplicationJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetAPIV2ListFederationsRequest:
    headers: GetAPIV2ListFederationsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV2ListFederationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_api_v2_list_federations_200_application_json_object: Optional[GetAPIV2ListFederations200ApplicationJSON] = dataclasses.field(default=None)
    get_api_v2_list_federations_404_application_json_object: Optional[GetAPIV2ListFederations404ApplicationJSON] = dataclasses.field(default=None)
    

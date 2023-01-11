import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import critic as shared_critic


@dataclasses.dataclass
class GetCriticsResourceTypeJSONPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCriticsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_critic.Critic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetCriticsResourceTypeJSONRequest:
    path_params: GetCriticsResourceTypeJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCriticsResourceTypeJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_critics_resource_type_json_200_application_json_object: Optional[GetCriticsResourceTypeJSON200ApplicationJSON] = dataclasses.field(default=None)
    

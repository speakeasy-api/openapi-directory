import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import key as shared_key


@dataclasses.dataclass
class GetTargetsTargetIDKeysPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDKeysQueryParams:
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDKeys200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    results: Optional[list[shared_key.Key]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDKeys401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDKeys404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDKeysRequest:
    path_params: GetTargetsTargetIDKeysPathParams = dataclasses.field()
    query_params: GetTargetsTargetIDKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_keys_200_application_json_object: Optional[GetTargetsTargetIDKeys200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_keys_401_application_json_object: Optional[GetTargetsTargetIDKeys401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_keys_404_application_json_object: Optional[GetTargetsTargetIDKeys404ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetFamilyDetailsQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetFamilyDetails200ApplicationJSON:
    definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hypernyms: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hypernyms') }})
    perm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permId') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    wikidata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wikidata') }})
    wordnet30: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordnet30') }})
    

@dataclasses.dataclass
class GetFamilyDetailsRequest:
    query_params: GetFamilyDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFamilyDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_family_details_200_application_json_object: Optional[GetFamilyDetails200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetstateabbreviationQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    state: str = dataclasses.field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getstateabbreviation200ApplicationJSON:
    abbreviation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abbreviation') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclasses.dataclass
class GetstateabbreviationRequest:
    query_params: GetstateabbreviationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetstateabbreviationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getstateabbreviation_200_application_json_object: Optional[Getstateabbreviation200ApplicationJSON] = dataclasses.field(default=None)
    

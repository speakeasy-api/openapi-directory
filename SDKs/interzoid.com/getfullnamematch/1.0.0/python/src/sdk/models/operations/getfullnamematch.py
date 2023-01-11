import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetfullnamematchQueryParams:
    fullname: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fullname', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getfullnamematch200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    simkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simkey') }})
    

@dataclasses.dataclass
class GetfullnamematchRequest:
    query_params: GetfullnamematchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetfullnamematchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getfullnamematch_200_application_json_object: Optional[Getfullnamematch200ApplicationJSON] = dataclasses.field(default=None)
    

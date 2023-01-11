import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetfullnameparsedmatchQueryParams:
    firstname: str = dataclasses.field(metadata={'query_param': { 'field_name': 'firstname', 'style': 'form', 'explode': True }})
    lastname: str = dataclasses.field(metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getfullnameparsedmatch200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    simkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simkey') }})
    

@dataclasses.dataclass
class GetfullnameparsedmatchRequest:
    query_params: GetfullnameparsedmatchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetfullnameparsedmatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getfullnameparsedmatch_200_application_json_object: Optional[Getfullnameparsedmatch200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GlobalpageloadQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Globalpageload200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Contents') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    page_response_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageResponseStatus') }})
    seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Seconds') }})
    

@dataclasses.dataclass
class GlobalpageloadRequest:
    query_params: GlobalpageloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GlobalpageloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    globalpageload_200_application_json_object: Optional[Globalpageload200ApplicationJSON] = dataclasses.field(default=None)
    

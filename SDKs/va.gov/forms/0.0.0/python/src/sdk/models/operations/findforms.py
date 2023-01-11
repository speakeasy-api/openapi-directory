import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class FindFormsQueryParams:
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindFormsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class FindForms200ApplicationJSON:
    data: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class FindFormsRequest:
    query_params: FindFormsQueryParams = dataclasses.field()
    security: FindFormsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindFormsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    find_forms_200_application_json_object: Optional[FindForms200ApplicationJSON] = dataclasses.field(default=None)
    find_forms_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    find_forms_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

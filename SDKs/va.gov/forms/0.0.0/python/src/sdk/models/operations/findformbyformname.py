import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class FindFormByFormNamePathParams:
    form_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'form_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindFormByFormNameSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class FindFormByFormName200ApplicationJSON:
    data: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class FindFormByFormName404ApplicationJSON:
    errors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class FindFormByFormNameRequest:
    path_params: FindFormByFormNamePathParams = dataclasses.field()
    security: FindFormByFormNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindFormByFormNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    find_form_by_form_name_200_application_json_object: Optional[FindFormByFormName200ApplicationJSON] = dataclasses.field(default=None)
    find_form_by_form_name_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    find_form_by_form_name_404_application_json_object: Optional[FindFormByFormName404ApplicationJSON] = dataclasses.field(default=None)
    find_form_by_form_name_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    

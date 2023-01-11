import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import framework as shared_framework


@dataclasses.dataclass
class GetFrameworksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFrameworksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFrameworksID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetFrameworksIDRequest:
    path_params: GetFrameworksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFrameworksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    framework: Optional[shared_framework.Framework] = dataclasses.field(default=None)
    get_frameworks_id_401_application_json_object: Optional[GetFrameworksID401ApplicationJSON] = dataclasses.field(default=None)
    get_frameworks_id_404_application_json_object: Optional[GetFrameworksID404ApplicationJSON] = dataclasses.field(default=None)
    

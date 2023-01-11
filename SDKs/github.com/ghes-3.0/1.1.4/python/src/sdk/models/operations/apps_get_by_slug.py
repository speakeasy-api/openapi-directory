import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class AppsGetBySlugPathParams:
    app_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsGetBySlug415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AppsGetBySlugRequest:
    path_params: AppsGetBySlugPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetBySlugResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_get_by_slug_415_application_json_object: Optional[AppsGetBySlug415ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    integration: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

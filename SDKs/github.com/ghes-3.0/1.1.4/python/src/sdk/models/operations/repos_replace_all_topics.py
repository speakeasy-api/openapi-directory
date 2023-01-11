import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import topic as shared_topic
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ReposReplaceAllTopicsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposReplaceAllTopicsRequestBody:
    names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposReplaceAllTopics415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposReplaceAllTopicsRequest:
    path_params: ReposReplaceAllTopicsPathParams = dataclasses.field()
    request: Optional[ReposReplaceAllTopicsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposReplaceAllTopicsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repos_replace_all_topics_415_application_json_object: Optional[ReposReplaceAllTopics415ApplicationJSON] = dataclasses.field(default=None)
    topic: Optional[shared_topic.Topic] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    

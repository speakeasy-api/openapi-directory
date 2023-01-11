import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import gist_comment as shared_gist_comment


@dataclasses.dataclass
class GistsGetCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GistsGetComment403ApplicationJSONBlock:
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class GistsGetComment403ApplicationJSON:
    block: Optional[GistsGetComment403ApplicationJSONBlock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GistsGetCommentRequest:
    path_params: GistsGetCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsGetCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_comment: Optional[shared_gist_comment.GistComment] = dataclasses.field(default=None)
    gists_get_comment_403_application_json_object: Optional[GistsGetComment403ApplicationJSON] = dataclasses.field(default=None)
    

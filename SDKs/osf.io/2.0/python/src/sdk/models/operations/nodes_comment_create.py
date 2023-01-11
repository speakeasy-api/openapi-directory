import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class NodesCommentCreatePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class NodesCommentCreateCommentAttributesInput:
    r"""NodesCommentCreateCommentAttributesInput
    The properties of the comment entity.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesCommentCreateCommentInput:
    attributes: Optional[NodesCommentCreateCommentAttributesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class NodesCommentCreateRequest:
    path_params: NodesCommentCreatePathParams = dataclasses.field()
    request: NodesCommentCreateCommentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesCommentCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

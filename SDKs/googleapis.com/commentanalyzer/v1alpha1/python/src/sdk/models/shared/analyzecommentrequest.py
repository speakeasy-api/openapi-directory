import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textentry as shared_textentry
from ..shared import context as shared_context
from ..shared import attributeparameters as shared_attributeparameters


@dataclass_json
@dataclasses.dataclass
class AnalyzeCommentRequest:
    r"""AnalyzeCommentRequest
    The comment analysis request message.
    """
    
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    comment: Optional[shared_textentry.TextEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    community_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communityId') }})
    context: Optional[shared_context.Context] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    do_not_store: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotStore') }})
    languages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    requested_attributes: Optional[dict[str, shared_attributeparameters.AttributeParameters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAttributes') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    span_annotations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanAnnotations') }})
    

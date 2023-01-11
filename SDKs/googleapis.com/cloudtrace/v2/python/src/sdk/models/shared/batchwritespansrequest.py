import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import span as shared_span


@dataclass_json
@dataclasses.dataclass
class BatchWriteSpansRequest:
    r"""BatchWriteSpansRequest
    The request message for the `BatchWriteSpans` method.
    """
    
    spans: Optional[list[shared_span.Span]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spans') }})
    

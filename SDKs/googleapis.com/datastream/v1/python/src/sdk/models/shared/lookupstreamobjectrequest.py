import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceobjectidentifier as shared_sourceobjectidentifier


@dataclass_json
@dataclasses.dataclass
class LookupStreamObjectRequest:
    r"""LookupStreamObjectRequest
    Request for looking up a specific stream object by its source object identifier.
    """
    
    source_object_identifier: Optional[shared_sourceobjectidentifier.SourceObjectIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObjectIdentifier') }})
    

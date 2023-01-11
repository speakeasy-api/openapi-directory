import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributes as shared_attributes
from ..shared import truncatablestring as shared_truncatablestring


@dataclass_json
@dataclasses.dataclass
class Annotation:
    r"""Annotation
    Text annotation with a set of attributes.
    """
    
    attributes: Optional[shared_attributes.Attributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    description: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

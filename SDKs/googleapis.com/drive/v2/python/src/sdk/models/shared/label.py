import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labelfield as shared_labelfield


@dataclass_json
@dataclasses.dataclass
class Label:
    r"""Label
    Representation of a label and its fields.
    """
    
    fields: Optional[dict[str, shared_labelfield.LabelField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    

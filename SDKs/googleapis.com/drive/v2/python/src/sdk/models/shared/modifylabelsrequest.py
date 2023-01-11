import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labelmodification as shared_labelmodification


@dataclass_json
@dataclasses.dataclass
class ModifyLabelsRequest:
    r"""ModifyLabelsRequest
    A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_modifications: Optional[list[shared_labelmodification.LabelModification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelModifications') }})
    

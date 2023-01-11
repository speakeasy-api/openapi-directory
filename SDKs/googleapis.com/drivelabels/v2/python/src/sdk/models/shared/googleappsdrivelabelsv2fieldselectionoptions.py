import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2fieldselectionoptionschoice as shared_googleappsdrivelabelsv2fieldselectionoptionschoice
from ..shared import googleappsdrivelabelsv2fieldlistoptions as shared_googleappsdrivelabelsv2fieldlistoptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptions:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptions
    Options for the selection field type.
    """
    
    choices: Optional[list[shared_googleappsdrivelabelsv2fieldselectionoptionschoice.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[shared_googleappsdrivelabelsv2fieldlistoptions.GoogleAppsDriveLabelsV2FieldListOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

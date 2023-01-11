import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoice as shared_googleappsdrivelabelsv2betafieldselectionoptionschoice
from ..shared import googleappsdrivelabelsv2betafieldlistoptions as shared_googleappsdrivelabelsv2betafieldlistoptions
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoice as shared_googleappsdrivelabelsv2betafieldselectionoptionschoice


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptions
    Options for the selection field type.
    """
    
    choices: Optional[list[shared_googleappsdrivelabelsv2betafieldselectionoptionschoice.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[shared_googleappsdrivelabelsv2betafieldlistoptions.GoogleAppsDriveLabelsV2betaFieldListOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput
    Options for the selection field type.
    """
    
    choices: Optional[list[shared_googleappsdrivelabelsv2betafieldselectionoptionschoice.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[shared_googleappsdrivelabelsv2betafieldlistoptions.GoogleAppsDriveLabelsV2betaFieldListOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

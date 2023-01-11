import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalistlimits as shared_googleappsdrivelabelsv2betalistlimits


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaSelectionLimits:
    r"""GoogleAppsDriveLabelsV2betaSelectionLimits
    Limits for selection Field type.
    """
    
    list_limits: Optional[shared_googleappsdrivelabelsv2betalistlimits.GoogleAppsDriveLabelsV2betaListLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listLimits') }})
    max_choices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxChoices') }})
    max_deleted_choices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDeletedChoices') }})
    max_display_name_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDisplayNameLength') }})
    max_id_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdLength') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldlimits as shared_googleappsdrivelabelsv2betafieldlimits


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabelLimits:
    r"""GoogleAppsDriveLabelsV2betaLabelLimits
    Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
    """
    
    field_limits: Optional[shared_googleappsdrivelabelsv2betafieldlimits.GoogleAppsDriveLabelsV2betaFieldLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldLimits') }})
    max_deleted_fields: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDeletedFields') }})
    max_description_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDescriptionLength') }})
    max_draft_revisions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDraftRevisions') }})
    max_fields: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFields') }})
    max_title_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTitleLength') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

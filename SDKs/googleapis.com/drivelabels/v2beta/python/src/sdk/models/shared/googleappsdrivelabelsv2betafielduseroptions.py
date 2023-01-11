import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldlistoptions as shared_googleappsdrivelabelsv2betafieldlistoptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldUserOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldUserOptions
    Options for the user field type.
    """
    
    list_options: Optional[shared_googleappsdrivelabelsv2betafieldlistoptions.GoogleAppsDriveLabelsV2betaFieldListOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

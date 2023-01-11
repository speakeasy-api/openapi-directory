import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2fieldlistoptions as shared_googleappsdrivelabelsv2fieldlistoptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2FieldUserOptions:
    r"""GoogleAppsDriveLabelsV2FieldUserOptions
    Options for the user field type.
    """
    
    list_options: Optional[shared_googleappsdrivelabelsv2fieldlistoptions.GoogleAppsDriveLabelsV2FieldListOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

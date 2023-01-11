import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2color as shared_googleprivacydlpv2color
from ..shared import googleprivacydlpv2selectedinfotypes as shared_googleprivacydlpv2selectedinfotypes


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ImageTransformation:
    r"""GooglePrivacyDlpV2ImageTransformation
    Configuration for determining how redaction of images should occur.
    """
    
    all_info_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allInfoTypes') }})
    all_text: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allText') }})
    redaction_color: Optional[shared_googleprivacydlpv2color.GooglePrivacyDlpV2Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactionColor') }})
    selected_info_types: Optional[shared_googleprivacydlpv2selectedinfotypes.GooglePrivacyDlpV2SelectedInfoTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedInfoTypes') }})
    

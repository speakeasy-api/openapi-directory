import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2color as shared_googleprivacydlpv2color


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ImageRedactionConfig:
    r"""GooglePrivacyDlpV2ImageRedactionConfig
    Configuration for determining how redaction of images should occur.
    """
    
    info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    redact_all_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactAllText') }})
    redaction_color: Optional[shared_googleprivacydlpv2color.GooglePrivacyDlpV2Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactionColor') }})
    

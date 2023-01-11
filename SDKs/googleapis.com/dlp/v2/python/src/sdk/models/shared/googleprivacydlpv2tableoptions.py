import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2TableOptions:
    r"""GooglePrivacyDlpV2TableOptions
    Instructions regarding the table content being inspected.
    """
    
    identifying_fields: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifyingFields') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2QuasiIdentifierField:
    r"""GooglePrivacyDlpV2QuasiIdentifierField
    A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
    """
    
    custom_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTag') }})
    field: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    

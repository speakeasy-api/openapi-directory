import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2EntityID:
    r"""GooglePrivacyDlpV2EntityID
    An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
    """
    
    field: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    

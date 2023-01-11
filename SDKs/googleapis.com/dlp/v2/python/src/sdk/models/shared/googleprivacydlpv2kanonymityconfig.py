import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2entityid as shared_googleprivacydlpv2entityid
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KAnonymityConfig:
    r"""GooglePrivacyDlpV2KAnonymityConfig
    k-anonymity metric, used for analysis of reidentification risk.
    """
    
    entity_id: Optional[shared_googleprivacydlpv2entityid.GooglePrivacyDlpV2EntityID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    quasi_ids: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    

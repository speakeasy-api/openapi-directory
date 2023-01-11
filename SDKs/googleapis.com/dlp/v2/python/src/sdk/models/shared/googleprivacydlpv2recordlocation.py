import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2recordkey as shared_googleprivacydlpv2recordkey
from ..shared import googleprivacydlpv2tablelocation as shared_googleprivacydlpv2tablelocation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RecordLocation:
    r"""GooglePrivacyDlpV2RecordLocation
    Location of a finding within a row or record.
    """
    
    field_id: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    record_key: Optional[shared_googleprivacydlpv2recordkey.GooglePrivacyDlpV2RecordKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordKey') }})
    table_location: Optional[shared_googleprivacydlpv2tablelocation.GooglePrivacyDlpV2TableLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableLocation') }})
    

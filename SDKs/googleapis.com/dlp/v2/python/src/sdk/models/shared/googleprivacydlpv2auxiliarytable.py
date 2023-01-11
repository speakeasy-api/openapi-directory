import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2quasiidfield as shared_googleprivacydlpv2quasiidfield
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2AuxiliaryTable:
    r"""GooglePrivacyDlpV2AuxiliaryTable
    An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
    """
    
    quasi_ids: Optional[list[shared_googleprivacydlpv2quasiidfield.GooglePrivacyDlpV2QuasiIDField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    relative_frequency: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeFrequency') }})
    table: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    

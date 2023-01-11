import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2BigQueryKey:
    r"""GooglePrivacyDlpV2BigQueryKey
    Row key for identifying a record in BigQuery table.
    """
    
    row_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowNumber') }})
    table_reference: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableReference') }})
    

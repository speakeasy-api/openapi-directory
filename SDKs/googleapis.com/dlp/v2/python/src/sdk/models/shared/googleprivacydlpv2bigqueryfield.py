import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2BigQueryField:
    r"""GooglePrivacyDlpV2BigQueryField
    Message defining a field of a BigQuery table.
    """
    
    field: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    table: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable

class GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum(str, Enum):
    SAMPLE_METHOD_UNSPECIFIED = "SAMPLE_METHOD_UNSPECIFIED"
    TOP = "TOP"
    RANDOM_START = "RANDOM_START"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2BigQueryOptions:
    r"""GooglePrivacyDlpV2BigQueryOptions
    Options defining BigQuery table and row identifiers.
    """
    
    excluded_fields: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedFields') }})
    identifying_fields: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifyingFields') }})
    included_fields: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFields') }})
    rows_limit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsLimit') }})
    rows_limit_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsLimitPercent') }})
    sample_method: Optional[GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMethod') }})
    table_reference: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableReference') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bigquerykey as shared_googleprivacydlpv2bigquerykey
from ..shared import googleprivacydlpv2datastorekey as shared_googleprivacydlpv2datastorekey


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RecordKey:
    r"""GooglePrivacyDlpV2RecordKey
    Message for a unique key indicating a record that contains a finding.
    """
    
    big_query_key: Optional[shared_googleprivacydlpv2bigquerykey.GooglePrivacyDlpV2BigQueryKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryKey') }})
    datastore_key: Optional[shared_googleprivacydlpv2datastorekey.GooglePrivacyDlpV2DatastoreKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreKey') }})
    id_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idValues') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bigqueryoptions as shared_googleprivacydlpv2bigqueryoptions
from ..shared import googleprivacydlpv2cloudstorageoptions as shared_googleprivacydlpv2cloudstorageoptions
from ..shared import googleprivacydlpv2datastoreoptions as shared_googleprivacydlpv2datastoreoptions
from ..shared import googleprivacydlpv2hybridoptions as shared_googleprivacydlpv2hybridoptions
from ..shared import googleprivacydlpv2timespanconfig as shared_googleprivacydlpv2timespanconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2StorageConfig:
    r"""GooglePrivacyDlpV2StorageConfig
    Shared message indicating Cloud storage type.
    """
    
    big_query_options: Optional[shared_googleprivacydlpv2bigqueryoptions.GooglePrivacyDlpV2BigQueryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryOptions') }})
    cloud_storage_options: Optional[shared_googleprivacydlpv2cloudstorageoptions.GooglePrivacyDlpV2CloudStorageOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageOptions') }})
    datastore_options: Optional[shared_googleprivacydlpv2datastoreoptions.GooglePrivacyDlpV2DatastoreOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreOptions') }})
    hybrid_options: Optional[shared_googleprivacydlpv2hybridoptions.GooglePrivacyDlpV2HybridOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridOptions') }})
    timespan_config: Optional[shared_googleprivacydlpv2timespanconfig.GooglePrivacyDlpV2TimespanConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timespanConfig') }})
    

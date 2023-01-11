import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bigqueryfield as shared_googleprivacydlpv2bigqueryfield
from ..shared import googleprivacydlpv2cloudstoragefileset as shared_googleprivacydlpv2cloudstoragefileset
from ..shared import googleprivacydlpv2cloudstoragepath as shared_googleprivacydlpv2cloudstoragepath


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2LargeCustomDictionaryConfig:
    r"""GooglePrivacyDlpV2LargeCustomDictionaryConfig
    Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
    """
    
    big_query_field: Optional[shared_googleprivacydlpv2bigqueryfield.GooglePrivacyDlpV2BigQueryField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryField') }})
    cloud_storage_file_set: Optional[shared_googleprivacydlpv2cloudstoragefileset.GooglePrivacyDlpV2CloudStorageFileSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageFileSet') }})
    output_path: Optional[shared_googleprivacydlpv2cloudstoragepath.GooglePrivacyDlpV2CloudStoragePath] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputPath') }})
    

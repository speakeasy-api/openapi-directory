import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p7beta1partitionspec as shared_googlecloudassetv1p7beta1partitionspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p7beta1BigQueryDestination:
    r"""GoogleCloudAssetV1p7beta1BigQueryDestination
    A BigQuery destination for exporting assets to.
    """
    
    dataset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    partition_spec: Optional[shared_googlecloudassetv1p7beta1partitionspec.GoogleCloudAssetV1p7beta1PartitionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionSpec') }})
    separate_tables_per_asset_type: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separateTablesPerAssetType') }})
    table: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    

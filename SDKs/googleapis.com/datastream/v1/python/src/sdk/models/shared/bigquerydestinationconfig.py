import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import singletargetdataset as shared_singletargetdataset
from ..shared import sourcehierarchydatasets as shared_sourcehierarchydatasets


@dataclass_json
@dataclasses.dataclass
class BigQueryDestinationConfig:
    data_freshness: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFreshness') }})
    single_target_dataset: Optional[shared_singletargetdataset.SingleTargetDataset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleTargetDataset') }})
    source_hierarchy_datasets: Optional[shared_sourcehierarchydatasets.SourceHierarchyDatasets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceHierarchyDatasets') }})
    

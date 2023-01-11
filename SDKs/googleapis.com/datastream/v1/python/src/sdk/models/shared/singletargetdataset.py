import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SingleTargetDataset:
    r"""SingleTargetDataset
    A single target dataset to which all data will be streamed.
    """
    
    dataset_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    

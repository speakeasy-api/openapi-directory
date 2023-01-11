import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasettemplate as shared_datasettemplate


@dataclass_json
@dataclasses.dataclass
class SourceHierarchyDatasets:
    r"""SourceHierarchyDatasets
    Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
    """
    
    dataset_template: Optional[shared_datasettemplate.DatasetTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetTemplate') }})
    

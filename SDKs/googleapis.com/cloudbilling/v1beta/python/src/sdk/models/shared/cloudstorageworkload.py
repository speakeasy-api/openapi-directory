import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage
from ..shared import dualregional as shared_dualregional
from ..shared import multiregional as shared_multiregional
from ..shared import regional as shared_regional


@dataclass_json
@dataclasses.dataclass
class CloudStorageWorkload:
    r"""CloudStorageWorkload
    Specifies usage of Cloud Storage resources.
    """
    
    data_retrieval: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRetrieval') }})
    data_stored: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStored') }})
    dual_region: Optional[shared_dualregional.DualRegional] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dualRegion') }})
    multi_region: Optional[shared_multiregional.MultiRegional] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiRegion') }})
    operation_a: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationA') }})
    operation_b: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationB') }})
    region: Optional[shared_regional.Regional] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    

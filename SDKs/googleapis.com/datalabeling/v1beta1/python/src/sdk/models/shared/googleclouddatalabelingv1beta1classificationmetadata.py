import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ClassificationMetadata:
    r"""GoogleCloudDatalabelingV1beta1ClassificationMetadata
    Metadata for classification annotations.
    """
    
    is_multi_label: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMultiLabel') }})
    

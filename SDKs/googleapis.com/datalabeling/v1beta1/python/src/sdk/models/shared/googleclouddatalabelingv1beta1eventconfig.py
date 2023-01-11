import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EventConfig:
    r"""GoogleCloudDatalabelingV1beta1EventConfig
    Config for video event human labeling task.
    """
    
    annotation_spec_sets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSets') }})
    clip_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clipLength') }})
    overlap_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlapLength') }})
    

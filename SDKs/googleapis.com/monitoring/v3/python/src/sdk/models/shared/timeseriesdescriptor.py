import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labeldescriptor as shared_labeldescriptor
from ..shared import valuedescriptor as shared_valuedescriptor


@dataclass_json
@dataclasses.dataclass
class TimeSeriesDescriptor:
    r"""TimeSeriesDescriptor
    A descriptor for the labels and points in a time series.
    """
    
    label_descriptors: Optional[list[shared_labeldescriptor.LabelDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDescriptors') }})
    point_descriptors: Optional[list[shared_valuedescriptor.ValueDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointDescriptors') }})
    

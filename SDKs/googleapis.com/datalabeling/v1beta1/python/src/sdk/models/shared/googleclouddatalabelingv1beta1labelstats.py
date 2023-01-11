import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1LabelStats:
    r"""GoogleCloudDatalabelingV1beta1LabelStats
    Statistics about annotation specs.
    """
    
    example_count: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleCount') }})
    

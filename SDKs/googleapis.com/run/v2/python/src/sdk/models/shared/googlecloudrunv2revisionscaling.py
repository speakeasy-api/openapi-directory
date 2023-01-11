import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2RevisionScaling:
    r"""GoogleCloudRunV2RevisionScaling
    Settings for revision-level scaling settings.
    """
    
    max_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceCount') }})
    min_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstanceCount') }})
    

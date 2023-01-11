import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EndpointMatcherMetadataLabelMatcherMetadataLabels:
    r"""EndpointMatcherMetadataLabelMatcherMetadataLabels
    Defines a name-pair value for a single label.
    """
    
    label_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelName') }})
    label_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelValue') }})
    

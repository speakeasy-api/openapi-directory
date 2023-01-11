import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1SecurityProjection:
    r"""GoogleCloudRecommenderV1beta1SecurityProjection
    Contains various ways of describing the impact on Security.
    """
    
    details: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    

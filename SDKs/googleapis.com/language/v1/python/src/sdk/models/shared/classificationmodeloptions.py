import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v2model as shared_v2model


@dataclass_json
@dataclasses.dataclass
class ClassificationModelOptions:
    r"""ClassificationModelOptions
    Model options available for classification requests.
    """
    
    v1_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1Model') }})
    v2_model: Optional[shared_v2model.V2Model] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2Model') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tensorflowversion as shared_tensorflowversion


@dataclass_json
@dataclasses.dataclass
class ListTensorFlowVersionsResponse:
    r"""ListTensorFlowVersionsResponse
    Response for ListTensorFlowVersions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tensorflow_versions: Optional[list[shared_tensorflowversion.TensorFlowVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensorflowVersions') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    

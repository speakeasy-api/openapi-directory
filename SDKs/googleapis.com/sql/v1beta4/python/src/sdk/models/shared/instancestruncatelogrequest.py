import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truncatelogcontext as shared_truncatelogcontext


@dataclass_json
@dataclasses.dataclass
class InstancesTruncateLogRequest:
    r"""InstancesTruncateLogRequest
    Instance truncate log request.
    """
    
    truncate_log_context: Optional[shared_truncatelogcontext.TruncateLogContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncateLogContext') }})
    

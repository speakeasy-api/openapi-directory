import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudauditoptions as shared_cloudauditoptions
from ..shared import counteroptions as shared_counteroptions
from ..shared import dataaccessoptions as shared_dataaccessoptions


@dataclass_json
@dataclasses.dataclass
class LogConfig:
    r"""LogConfig
    Specifies what kind of log the caller must write
    """
    
    cloud_audit: Optional[shared_cloudauditoptions.CloudAuditOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudAudit') }})
    counter: Optional[shared_counteroptions.CounterOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counter') }})
    data_access: Optional[shared_dataaccessoptions.DataAccessOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccess') }})
    

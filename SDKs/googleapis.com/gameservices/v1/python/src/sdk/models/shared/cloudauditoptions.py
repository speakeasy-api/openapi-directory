import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationloggingoptions as shared_authorizationloggingoptions

class CloudAuditOptionsLogNameEnum(str, Enum):
    UNSPECIFIED_LOG_NAME = "UNSPECIFIED_LOG_NAME"
    ADMIN_ACTIVITY = "ADMIN_ACTIVITY"
    DATA_ACCESS = "DATA_ACCESS"


@dataclass_json
@dataclasses.dataclass
class CloudAuditOptions:
    r"""CloudAuditOptions
    Write a Cloud Audit log
    """
    
    authorization_logging_options: Optional[shared_authorizationloggingoptions.AuthorizationLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationLoggingOptions') }})
    log_name: Optional[CloudAuditOptionsLogNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logName') }})
    

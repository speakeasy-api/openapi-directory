import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2requestlogging as shared_googlecloudidentitytoolkitadminv2requestlogging


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2MonitoringConfig
    Configuration related to monitoring project activity.
    """
    
    request_logging: Optional[shared_googlecloudidentitytoolkitadminv2requestlogging.GoogleCloudIdentitytoolkitAdminV2RequestLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestLogging') }})
    

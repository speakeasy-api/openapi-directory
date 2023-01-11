import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpgradeRuntimeRequest:
    r"""UpgradeRuntimeRequest
    Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = \"TRUSTED_TESTER,SPECIAL_TESTER\";
    """
    
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apnsfcmoptions as shared_apnsfcmoptions


@dataclass_json
@dataclasses.dataclass
class ApnsConfig:
    r"""ApnsConfig
    [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
    """
    
    fcm_options: Optional[shared_apnsfcmoptions.ApnsFcmOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    

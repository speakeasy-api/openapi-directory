import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webpushfcmoptions as shared_webpushfcmoptions


@dataclass_json
@dataclasses.dataclass
class WebpushConfig:
    r"""WebpushConfig
    [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
    """
    
    data: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    fcm_options: Optional[shared_webpushfcmoptions.WebpushFcmOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    notification: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    

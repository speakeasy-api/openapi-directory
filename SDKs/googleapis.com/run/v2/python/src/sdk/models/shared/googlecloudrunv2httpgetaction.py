import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2httpheader as shared_googlecloudrunv2httpheader


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2HTTPGetAction:
    r"""GoogleCloudRunV2HTTPGetAction
    HTTPGetAction describes an action based on HTTP Get requests.
    """
    
    http_headers: Optional[list[shared_googlecloudrunv2httpheader.GoogleCloudRunV2HTTPHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaders') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

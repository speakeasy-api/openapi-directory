import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceperimeter as shared_serviceperimeter


@dataclass_json
@dataclasses.dataclass
class ReplaceServicePerimetersRequest:
    r"""ReplaceServicePerimetersRequest
    A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    service_perimeters: Optional[list[shared_serviceperimeter.ServicePerimeter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeters') }})
    

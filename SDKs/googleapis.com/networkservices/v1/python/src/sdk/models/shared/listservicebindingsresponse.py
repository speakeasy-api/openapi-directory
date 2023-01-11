import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicebinding as shared_servicebinding


@dataclass_json
@dataclasses.dataclass
class ListServiceBindingsResponse:
    r"""ListServiceBindingsResponse
    Response returned by the ListServiceBindings method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    service_bindings: Optional[list[shared_servicebinding.ServiceBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceBindings') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registerparameters as shared_registerparameters


@dataclass_json
@dataclasses.dataclass
class SearchDomainsResponse:
    r"""SearchDomainsResponse
    Response for the `SearchDomains` method.
    """
    
    register_parameters: Optional[list[shared_registerparameters.RegisterParameters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registerParameters') }})
    

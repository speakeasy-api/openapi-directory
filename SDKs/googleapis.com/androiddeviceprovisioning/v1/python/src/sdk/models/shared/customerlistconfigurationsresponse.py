import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configuration as shared_configuration


@dataclass_json
@dataclasses.dataclass
class CustomerListConfigurationsResponse:
    r"""CustomerListConfigurationsResponse
    Response message of customer's listing configuration.
    """
    
    configurations: Optional[list[shared_configuration.Configuration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurations') }})
    

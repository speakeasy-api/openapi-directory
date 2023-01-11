import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GceInstanceFilter:
    r"""GceInstanceFilter
    Message describing compute engine instance filter
    """
    
    service_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccounts') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkTokenEuConfig:
    r"""LinkTokenEuConfig
    Configuration parameters for EU flows
    """
    
    headless: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headless') }})
    

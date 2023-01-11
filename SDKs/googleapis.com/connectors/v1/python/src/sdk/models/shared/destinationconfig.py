import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination


@dataclass_json
@dataclasses.dataclass
class DestinationConfig:
    r"""DestinationConfig
    Define the Connectors target endpoint.
    """
    
    destinations: Optional[list[shared_destination.Destination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    

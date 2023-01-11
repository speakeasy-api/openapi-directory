import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DestinationURLEvidence:
    r"""DestinationURLEvidence
    The full landing page URL of the destination.
    """
    
    destination_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    

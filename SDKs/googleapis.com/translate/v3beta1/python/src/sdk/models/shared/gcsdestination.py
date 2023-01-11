import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GcsDestination:
    r"""GcsDestination
    The Google Cloud Storage location for the output content.
    """
    
    output_uri_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUriPrefix') }})
    

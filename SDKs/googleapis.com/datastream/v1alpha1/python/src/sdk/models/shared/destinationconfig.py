import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcsdestinationconfig as shared_gcsdestinationconfig


@dataclass_json
@dataclasses.dataclass
class DestinationConfig:
    r"""DestinationConfig
    The configuration of the stream destination.
    """
    
    destination_connection_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConnectionProfileName') }})
    gcs_destination_config: Optional[shared_gcsdestinationconfig.GcsDestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestinationConfig') }})
    

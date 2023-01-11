import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bigquerydestinationconfig as shared_bigquerydestinationconfig
from ..shared import gcsdestinationconfig as shared_gcsdestinationconfig


@dataclass_json
@dataclasses.dataclass
class DestinationConfig:
    r"""DestinationConfig
    The configuration of the stream destination.
    """
    
    bigquery_destination_config: Optional[shared_bigquerydestinationconfig.BigQueryDestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestinationConfig') }})
    destination_connection_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConnectionProfile') }})
    gcs_destination_config: Optional[shared_gcsdestinationconfig.GcsDestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestinationConfig') }})
    

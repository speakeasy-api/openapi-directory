import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import binlogcoordinates as shared_binlogcoordinates


@dataclass_json
@dataclasses.dataclass
class CloneContext:
    r"""CloneContext
    Database instance clone context.
    """
    
    allocated_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedIpRange') }})
    bin_log_coordinates: Optional[shared_binlogcoordinates.BinLogCoordinates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binLogCoordinates') }})
    database_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseNames') }})
    destination_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationInstanceName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pitr_timestamp_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitrTimestampMs') }})
    point_in_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointInTime') }})
    

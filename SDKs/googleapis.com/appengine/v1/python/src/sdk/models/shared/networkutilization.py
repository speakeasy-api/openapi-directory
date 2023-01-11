import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NetworkUtilization:
    r"""NetworkUtilization
    Target scaling by network usage. Only applicable in the App Engine flexible environment.
    """
    
    target_received_bytes_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetReceivedBytesPerSecond') }})
    target_received_packets_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetReceivedPacketsPerSecond') }})
    target_sent_bytes_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSentBytesPerSecond') }})
    target_sent_packets_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSentPacketsPerSecond') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MonitorStreamInfo:
    r"""MonitorStreamInfo
    Settings and Info of the monitor stream
    """
    
    broadcast_stream_delay_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcastStreamDelayMs') }})
    embed_html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedHtml') }})
    enable_monitor_stream: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableMonitorStream') }})
    

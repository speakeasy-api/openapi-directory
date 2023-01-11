import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StatsdConfig:
    r"""StatsdConfig
    The configuration for statsd metrics push
    """
    
    datadog: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datadog') }})
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

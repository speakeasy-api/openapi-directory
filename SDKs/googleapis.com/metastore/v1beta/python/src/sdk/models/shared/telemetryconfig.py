import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TelemetryConfigLogFormatEnum(str, Enum):
    LOG_FORMAT_UNSPECIFIED = "LOG_FORMAT_UNSPECIFIED"
    LEGACY = "LEGACY"
    JSON = "JSON"


@dataclass_json
@dataclasses.dataclass
class TelemetryConfig:
    r"""TelemetryConfig
    Telemetry Configuration for the Dataproc Metastore service.
    """
    
    log_format: Optional[TelemetryConfigLogFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logFormat') }})
    

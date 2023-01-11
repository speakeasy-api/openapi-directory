import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticconfig as shared_elasticconfig
from ..shared import kafkaconfig as shared_kafkaconfig
from ..shared import pulsardataexporterconfig as shared_pulsardataexporterconfig
from ..shared import filedataexporterconfig as shared_filedataexporterconfig
from ..shared import mailergenericexporterconfig as shared_mailergenericexporterconfig
from ..shared import mailerconsoleexporterconfig as shared_mailerconsoleexporterconfig
from ..shared import mailermailgunexporterconfig as shared_mailermailgunexporterconfig
from ..shared import mailermailjetexporterconfig as shared_mailermailjetexporterconfig
from ..shared import mailersendgridexporterconfig as shared_mailersendgridexporterconfig
from ..shared import customdataexporterconfig as shared_customdataexporterconfig
from ..shared import filtering as shared_filtering
from ..shared import location as shared_location

class DataExporterConfigTypEnum(str, Enum):
    KAFKA = "kafka"
    PULSAR = "pulsar"
    FILE = "file"
    MAILER = "mailer"
    ELASTIC = "elastic"
    CONSOLE = "console"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class DataExporterConfig:
    r"""DataExporterConfig
    Settings to export Otorshi events
    """
    
    buffer_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bufferSize') }})
    config: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    enabled: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    filtering: Optional[shared_filtering.Filtering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filtering') }})
    group_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupDuration') }})
    group_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupSize') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    json_workers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonWorkers') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    projection: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    send_workers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendWorkers') }})
    typ: Optional[DataExporterConfigTypEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typ') }})
    

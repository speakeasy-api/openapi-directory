import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oraclerdbms as shared_oraclerdbms


@dataclass_json
@dataclasses.dataclass
class OracleSourceConfig:
    r"""OracleSourceConfig
    Oracle data source configuration
    """
    
    drop_large_objects: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropLargeObjects') }})
    exclude_objects: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    max_concurrent_cdc_tasks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentCdcTasks') }})
    stream_large_objects: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamLargeObjects') }})
    

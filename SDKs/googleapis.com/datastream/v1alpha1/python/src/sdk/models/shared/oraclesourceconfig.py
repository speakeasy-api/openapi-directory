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
    
    allowlist: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlist') }})
    drop_large_objects: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropLargeObjects') }})
    rejectlist: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectlist') }})
    

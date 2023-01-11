import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatabaseConfig:
    r"""DatabaseConfig
    The configuration of Cloud SQL instance that is used by the Apache Airflow software.
    """
    
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    

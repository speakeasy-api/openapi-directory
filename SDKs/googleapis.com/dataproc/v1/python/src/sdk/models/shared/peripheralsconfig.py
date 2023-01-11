import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sparkhistoryserverconfig as shared_sparkhistoryserverconfig


@dataclass_json
@dataclasses.dataclass
class PeripheralsConfig:
    r"""PeripheralsConfig
    Auxiliary services configuration for a workload.
    """
    
    metastore_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreService') }})
    spark_history_server_config: Optional[shared_sparkhistoryserverconfig.SparkHistoryServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkHistoryServerConfig') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metastoreconfig as shared_metastoreconfig
from ..shared import sparkhistoryserverconfig as shared_sparkhistoryserverconfig


@dataclass_json
@dataclasses.dataclass
class AuxiliaryServicesConfig:
    r"""AuxiliaryServicesConfig
    Auxiliary services configuration for a Cluster.
    """
    
    metastore_config: Optional[shared_metastoreconfig.MetastoreConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    spark_history_server_config: Optional[shared_sparkhistoryserverconfig.SparkHistoryServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkHistoryServerConfig') }})
    

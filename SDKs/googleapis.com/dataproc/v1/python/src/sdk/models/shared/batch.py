import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentconfig as shared_environmentconfig
from ..shared import pysparkbatch as shared_pysparkbatch
from ..shared import runtimeconfig as shared_runtimeconfig
from ..shared import runtimeinfo as shared_runtimeinfo
from ..shared import sparkbatch as shared_sparkbatch
from ..shared import sparkrbatch as shared_sparkrbatch
from ..shared import sparksqlbatch as shared_sparksqlbatch
from ..shared import statehistory as shared_statehistory
from ..shared import runtimeinfo as shared_runtimeinfo

class BatchStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class Batch:
    r"""Batch
    A representation of a batch workload in the service.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    environment_config: Optional[shared_environmentconfig.EnvironmentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentConfig') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    pyspark_batch: Optional[shared_pysparkbatch.PySparkBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkBatch') }})
    runtime_config: Optional[shared_runtimeconfig.RuntimeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfig') }})
    runtime_info: Optional[shared_runtimeinfo.RuntimeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeInfo') }})
    spark_batch: Optional[shared_sparkbatch.SparkBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkBatch') }})
    spark_r_batch: Optional[shared_sparkrbatch.SparkRBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRBatch') }})
    spark_sql_batch: Optional[shared_sparksqlbatch.SparkSQLBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlBatch') }})
    state: Optional[BatchStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_history: Optional[list[shared_statehistory.StateHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateHistory') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchInput:
    r"""BatchInput
    A representation of a batch workload in the service.
    """
    
    environment_config: Optional[shared_environmentconfig.EnvironmentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentConfig') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pyspark_batch: Optional[shared_pysparkbatch.PySparkBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkBatch') }})
    runtime_config: Optional[shared_runtimeconfig.RuntimeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfig') }})
    runtime_info: Optional[shared_runtimeinfo.RuntimeInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeInfo') }})
    spark_batch: Optional[shared_sparkbatch.SparkBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkBatch') }})
    spark_r_batch: Optional[shared_sparkrbatch.SparkRBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRBatch') }})
    spark_sql_batch: Optional[shared_sparksqlbatch.SparkSQLBatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlBatch') }})
    

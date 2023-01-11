import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlsourceconfig as shared_mysqlsourceconfig
from ..shared import oraclesourceconfig as shared_oraclesourceconfig


@dataclass_json
@dataclasses.dataclass
class SourceConfig:
    r"""SourceConfig
    The configuration of the stream source.
    """
    
    mysql_source_config: Optional[shared_mysqlsourceconfig.MysqlSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlSourceConfig') }})
    oracle_source_config: Optional[shared_oraclesourceconfig.OracleSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleSourceConfig') }})
    source_connection_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConnectionProfileName') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionprofile as shared_connectionprofile
from ..shared import mysqlrdbms as shared_mysqlrdbms
from ..shared import oraclerdbms as shared_oraclerdbms


@dataclass_json
@dataclasses.dataclass
class DiscoverConnectionProfileRequestInput:
    r"""DiscoverConnectionProfileRequestInput
    Request message for 'discover' ConnectionProfile request.
    """
    
    connection_profile: Optional[shared_connectionprofile.ConnectionProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProfile') }})
    connection_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProfileName') }})
    mysql_rdbms: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlRdbms') }})
    oracle_rdbms: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleRdbms') }})
    recursion_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursionDepth') }})
    recursive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursive') }})
    

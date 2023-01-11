import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sslconfig as shared_sslconfig
from ..shared import sslconfig as shared_sslconfig

class PostgreSQLConnectionProfileNetworkArchitectureEnum(str, Enum):
    NETWORK_ARCHITECTURE_UNSPECIFIED = "NETWORK_ARCHITECTURE_UNSPECIFIED"
    NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
    NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"


@dataclass_json
@dataclasses.dataclass
class PostgreSQLConnectionProfile:
    r"""PostgreSQLConnectionProfile
    Specifies connection parameters required specifically for PostgreSQL databases.
    """
    
    cloud_sql_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    network_architecture: Optional[PostgreSQLConnectionProfileNetworkArchitectureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkArchitecture') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_set: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordSet') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[shared_sslconfig.SslConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class PostgreSQLConnectionProfileInput:
    r"""PostgreSQLConnectionProfileInput
    Specifies connection parameters required specifically for PostgreSQL databases.
    """
    
    cloud_sql_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[shared_sslconfig.SslConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

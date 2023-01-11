import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alloydbconnectionprofile as shared_alloydbconnectionprofile
from ..shared import cloudsqlconnectionprofile as shared_cloudsqlconnectionprofile
from ..shared import status as shared_status
from ..shared import mysqlconnectionprofile as shared_mysqlconnectionprofile
from ..shared import postgresqlconnectionprofile as shared_postgresqlconnectionprofile
from ..shared import alloydbconnectionprofile as shared_alloydbconnectionprofile
from ..shared import cloudsqlconnectionprofile as shared_cloudsqlconnectionprofile
from ..shared import mysqlconnectionprofile as shared_mysqlconnectionprofile
from ..shared import postgresqlconnectionprofile as shared_postgresqlconnectionprofile

class ConnectionProfileProviderEnum(str, Enum):
    DATABASE_PROVIDER_UNSPECIFIED = "DATABASE_PROVIDER_UNSPECIFIED"
    CLOUDSQL = "CLOUDSQL"
    RDS = "RDS"
    AURORA = "AURORA"
    ALLOYDB = "ALLOYDB"

class ConnectionProfileStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class ConnectionProfile:
    r"""ConnectionProfile
    A connection profile definition.
    """
    
    alloydb: Optional[shared_alloydbconnectionprofile.AlloyDbConnectionProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alloydb') }})
    cloudsql: Optional[shared_cloudsqlconnectionprofile.CloudSQLConnectionProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsql') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql: Optional[shared_mysqlconnectionprofile.MySQLConnectionProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postgresql: Optional[shared_postgresqlconnectionprofile.PostgreSQLConnectionProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresql') }})
    provider: Optional[ConnectionProfileProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    state: Optional[ConnectionProfileStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ConnectionProfileInput:
    r"""ConnectionProfileInput
    A connection profile definition.
    """
    
    alloydb: Optional[shared_alloydbconnectionprofile.AlloyDbConnectionProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alloydb') }})
    cloudsql: Optional[shared_cloudsqlconnectionprofile.CloudSQLConnectionProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsql') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql: Optional[shared_mysqlconnectionprofile.MySQLConnectionProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postgresql: Optional[shared_postgresqlconnectionprofile.PostgreSQLConnectionProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresql') }})
    provider: Optional[ConnectionProfileProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    state: Optional[ConnectionProfileStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

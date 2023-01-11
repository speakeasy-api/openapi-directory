import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudsqlcredential as shared_cloudsqlcredential

class CloudSQLPropertiesTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    POSTGRES = "POSTGRES"
    MYSQL = "MYSQL"


@dataclass_json
@dataclasses.dataclass
class CloudSQLProperties:
    r"""CloudSQLProperties
    Connection properties specific to the Cloud SQL.
    """
    
    credential: Optional[shared_cloudsqlcredential.CloudSQLCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    service_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountId') }})
    type: Optional[CloudSQLPropertiesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CloudSQLPropertiesInput:
    r"""CloudSQLPropertiesInput
    Connection properties specific to the Cloud SQL.
    """
    
    credential: Optional[shared_cloudsqlcredential.CloudSQLCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    type: Optional[CloudSQLPropertiesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

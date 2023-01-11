import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudsqlcredential as shared_cloudsqlcredential


@dataclass_json
@dataclasses.dataclass
class ConnectionCredential:
    r"""ConnectionCredential
    Credential to use with a connection.
    """
    
    cloud_sql: Optional[shared_cloudsqlcredential.CloudSQLCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSql') }})
    

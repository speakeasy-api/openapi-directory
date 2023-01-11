import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudsqlsettings as shared_cloudsqlsettings
from ..shared import cloudsqlsettings as shared_cloudsqlsettings


@dataclass_json
@dataclasses.dataclass
class CloudSQLConnectionProfile:
    r"""CloudSQLConnectionProfile
    Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
    """
    
    cloud_sql_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    private_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIp') }})
    public_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    settings: Optional[shared_cloudsqlsettings.CloudSQLSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class CloudSQLConnectionProfileInput:
    r"""CloudSQLConnectionProfileInput
    Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
    """
    
    settings: Optional[shared_cloudsqlsettings.CloudSQLSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

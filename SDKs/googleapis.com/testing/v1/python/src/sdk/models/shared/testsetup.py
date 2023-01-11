import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import apk as shared_apk
from ..shared import environmentvariable as shared_environmentvariable
from ..shared import devicefile as shared_devicefile
from ..shared import systracesetup as shared_systracesetup


@dataclass_json
@dataclasses.dataclass
class TestSetup:
    r"""TestSetup
    A description of how to set up the Android device prior to running the test.
    """
    
    account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    additional_apks: Optional[list[shared_apk.Apk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalApks') }})
    directories_to_pull: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoriesToPull') }})
    dont_autogrant_permissions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dontAutograntPermissions') }})
    environment_variables: Optional[list[shared_environmentvariable.EnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    files_to_push: Optional[list[shared_devicefile.DeviceFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesToPush') }})
    network_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    systrace: Optional[shared_systracesetup.SystraceSetup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systrace') }})
    

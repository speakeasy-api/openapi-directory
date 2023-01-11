import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference
from ..shared import iosdevicefile as shared_iosdevicefile


@dataclass_json
@dataclasses.dataclass
class IosTestSetup:
    r"""IosTestSetup
    A description of how to set up an iOS device prior to running the test.
    """
    
    additional_ipas: Optional[list[shared_filereference.FileReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalIpas') }})
    network_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    pull_directories: Optional[list[shared_iosdevicefile.IosDeviceFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullDirectories') }})
    push_files: Optional[list[shared_iosdevicefile.IosDeviceFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushFiles') }})
    

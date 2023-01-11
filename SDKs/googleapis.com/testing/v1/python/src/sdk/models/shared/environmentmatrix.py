import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androiddevicelist as shared_androiddevicelist
from ..shared import androidmatrix as shared_androidmatrix
from ..shared import iosdevicelist as shared_iosdevicelist


@dataclass_json
@dataclasses.dataclass
class EnvironmentMatrix:
    r"""EnvironmentMatrix
    The matrix of environments in which the test is to be executed.
    """
    
    android_device_list: Optional[shared_androiddevicelist.AndroidDeviceList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeviceList') }})
    android_matrix: Optional[shared_androidmatrix.AndroidMatrix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidMatrix') }})
    ios_device_list: Optional[shared_iosdevicelist.IosDeviceList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDeviceList') }})
    

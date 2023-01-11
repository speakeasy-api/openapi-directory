import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apkbinary as shared_apkbinary


@dataclass_json
@dataclasses.dataclass
class Apk:
    r"""Apk
    Information about an APK. The resource for ApksService.
    """
    
    binary: Optional[shared_apkbinary.ApkBinary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binary') }})
    version_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    

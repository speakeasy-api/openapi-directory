import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aptsettings as shared_aptsettings
from ..shared import execstep as shared_execstep
from ..shared import windowsupdatesettings as shared_windowsupdatesettings
from ..shared import yumsettings as shared_yumsettings
from ..shared import zyppersettings as shared_zyppersettings

class PatchConfigRebootConfigEnum(str, Enum):
    REBOOT_CONFIG_UNSPECIFIED = "REBOOT_CONFIG_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"


@dataclass_json
@dataclasses.dataclass
class PatchConfig:
    r"""PatchConfig
    Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
    """
    
    apt: Optional[shared_aptsettings.AptSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    mig_instances_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migInstancesAllowed') }})
    post_step: Optional[shared_execstep.ExecStep] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStep') }})
    pre_step: Optional[shared_execstep.ExecStep] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preStep') }})
    reboot_config: Optional[PatchConfigRebootConfigEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebootConfig') }})
    windows_update: Optional[shared_windowsupdatesettings.WindowsUpdateSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsUpdate') }})
    yum: Optional[shared_yumsettings.YumSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[shared_zyppersettings.ZypperSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    

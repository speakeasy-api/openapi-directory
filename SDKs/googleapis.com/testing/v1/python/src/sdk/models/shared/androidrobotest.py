import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference
from ..shared import appbundle as shared_appbundle
from ..shared import robodirective as shared_robodirective
from ..shared import robostartingintent as shared_robostartingintent

class AndroidRoboTestRoboModeEnum(str, Enum):
    ROBO_MODE_UNSPECIFIED = "ROBO_MODE_UNSPECIFIED"
    ROBO_VERSION_1 = "ROBO_VERSION_1"
    ROBO_VERSION_2 = "ROBO_VERSION_2"


@dataclass_json
@dataclasses.dataclass
class AndroidRoboTest:
    r"""AndroidRoboTest
    A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
    """
    
    app_apk: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appApk') }})
    app_bundle: Optional[shared_appbundle.AppBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundle') }})
    app_initial_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInitialActivity') }})
    app_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackageId') }})
    max_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDepth') }})
    max_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSteps') }})
    robo_directives: Optional[list[shared_robodirective.RoboDirective]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboDirectives') }})
    robo_mode: Optional[AndroidRoboTestRoboModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboMode') }})
    robo_script: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboScript') }})
    starting_intents: Optional[list[shared_robostartingintent.RoboStartingIntent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingIntents') }})
    

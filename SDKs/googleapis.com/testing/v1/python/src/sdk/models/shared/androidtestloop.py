import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference
from ..shared import appbundle as shared_appbundle


@dataclass_json
@dataclasses.dataclass
class AndroidTestLoop:
    r"""AndroidTestLoop
    A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
    """
    
    app_apk: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appApk') }})
    app_bundle: Optional[shared_appbundle.AppBundle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundle') }})
    app_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackageId') }})
    scenario_labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioLabels') }})
    scenarios: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    

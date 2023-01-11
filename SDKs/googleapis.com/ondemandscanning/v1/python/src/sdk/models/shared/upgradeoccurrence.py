import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upgradedistribution as shared_upgradedistribution
from ..shared import version as shared_version
from ..shared import windowsupdate as shared_windowsupdate


@dataclass_json
@dataclasses.dataclass
class UpgradeOccurrence:
    r"""UpgradeOccurrence
    An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
    """
    
    distribution: Optional[shared_upgradedistribution.UpgradeDistribution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    package: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    parsed_version: Optional[shared_version.Version] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsedVersion') }})
    windows_update: Optional[shared_windowsupdate.WindowsUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsUpdate') }})
    

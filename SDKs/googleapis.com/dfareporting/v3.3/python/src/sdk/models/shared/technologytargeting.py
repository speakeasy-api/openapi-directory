import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import browser as shared_browser
from ..shared import connectiontype as shared_connectiontype
from ..shared import mobilecarrier as shared_mobilecarrier
from ..shared import operatingsystemversion as shared_operatingsystemversion
from ..shared import operatingsystem as shared_operatingsystem
from ..shared import platformtype as shared_platformtype


@dataclass_json
@dataclasses.dataclass
class TechnologyTargeting:
    r"""TechnologyTargeting
    Technology Targeting.
    """
    
    browsers: Optional[list[shared_browser.Browser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsers') }})
    connection_types: Optional[list[shared_connectiontype.ConnectionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionTypes') }})
    mobile_carriers: Optional[list[shared_mobilecarrier.MobileCarrier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileCarriers') }})
    operating_system_versions: Optional[list[shared_operatingsystemversion.OperatingSystemVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersions') }})
    operating_systems: Optional[list[shared_operatingsystem.OperatingSystem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    platform_types: Optional[list[shared_platformtype.PlatformType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformTypes') }})
    

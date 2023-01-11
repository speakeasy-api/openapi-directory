import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaFirebaseLink:
    r"""GoogleAnalyticsAdminV1betaFirebaseLink
    A link between a GA4 property and a Firebase project.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaFirebaseLinkInput:
    r"""GoogleAnalyticsAdminV1betaFirebaseLinkInput
    A link between a GA4 property and a Firebase project.
    """
    
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    

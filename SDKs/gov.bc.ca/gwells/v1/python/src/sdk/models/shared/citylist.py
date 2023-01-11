import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization as shared_organization


@dataclass_json
@dataclasses.dataclass
class CityList:
    organization: shared_organization.Organization = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

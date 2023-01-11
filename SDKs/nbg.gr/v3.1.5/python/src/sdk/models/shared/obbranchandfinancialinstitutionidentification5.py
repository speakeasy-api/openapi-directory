import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ObBranchAndFinancialInstitutionIdentification5:
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

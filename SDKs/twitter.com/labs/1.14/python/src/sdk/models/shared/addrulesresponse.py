import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule
from ..shared import rulesresponsemetadata as shared_rulesresponsemetadata


@dataclass_json
@dataclasses.dataclass
class AddRulesResponse:
    data: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: shared_rulesresponsemetadata.RulesResponseMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

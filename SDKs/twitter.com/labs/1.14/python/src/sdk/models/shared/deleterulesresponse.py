import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulesresponsemetadata as shared_rulesresponsemetadata


@dataclass_json
@dataclasses.dataclass
class DeleteRulesResponse:
    meta: shared_rulesresponsemetadata.RulesResponseMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

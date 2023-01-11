import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionfunctionidentifier as shared_actionfunctionidentifier


@dataclass_json
@dataclasses.dataclass
class CollectionResponseActionFunctionIdentifierNoPaging:
    results: list[shared_actionfunctionidentifier.ActionFunctionIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

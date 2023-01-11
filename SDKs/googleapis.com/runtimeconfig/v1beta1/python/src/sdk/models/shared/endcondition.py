import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardinality as shared_cardinality


@dataclass_json
@dataclasses.dataclass
class EndCondition:
    r"""EndCondition
    The condition that a Waiter resource is waiting for.
    """
    
    cardinality: Optional[shared_cardinality.Cardinality] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    

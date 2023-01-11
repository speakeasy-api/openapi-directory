import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RecognizedEntity:
    r"""RecognizedEntity
    An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
    
    """
    
    end_index: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_index') }})
    score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    start_index: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_index') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partial_address as shared_partial_address
from ..shared import recognized_entity as shared_recognized_entity


@dataclass_json
@dataclasses.dataclass
class ParseAddressResponseBody:
    r"""ParseAddressResponseBody
    The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
    
    """
    
    address: shared_partial_address.PartialAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    entities: list[shared_recognized_entity.RecognizedEntity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PublicIdentifier:
    r"""PublicIdentifier
    A public identifier for this customer.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scheme: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    

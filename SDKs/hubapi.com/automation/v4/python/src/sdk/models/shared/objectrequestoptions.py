import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ObjectRequestOptions:
    r"""ObjectRequestOptions
    Configures what properties of the enrolled CRM object are included in the action execution request
    """
    
    properties: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

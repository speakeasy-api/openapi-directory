import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    message: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchema:
    errors: list[OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

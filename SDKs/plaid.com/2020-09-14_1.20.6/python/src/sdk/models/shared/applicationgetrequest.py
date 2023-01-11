import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApplicationGetRequest:
    r"""ApplicationGetRequest
    ApplicationGetResponse defines the schema for `/application/get`
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

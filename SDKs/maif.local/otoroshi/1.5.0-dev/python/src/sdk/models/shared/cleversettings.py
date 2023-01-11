import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CleverSettings:
    r"""CleverSettings
    Configuration for CleverCloud client
    """
    
    consumer_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerKey') }})
    consumer_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerSecret') }})
    orga_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgaId') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

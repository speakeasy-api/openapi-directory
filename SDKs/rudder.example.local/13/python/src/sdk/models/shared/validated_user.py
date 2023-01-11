import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ValidatedUser:
    r"""ValidatedUser
    list of users with their workflow settings
    """
    
    is_validated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValidated') }})
    user_exists: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userExists') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

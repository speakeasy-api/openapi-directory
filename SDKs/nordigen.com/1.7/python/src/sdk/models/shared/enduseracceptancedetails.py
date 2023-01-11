import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnduserAcceptanceDetails:
    r"""EnduserAcceptanceDetails
    Represents end-user details.
    """
    
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }, 'form': { 'field_name': 'ip_address' }, 'multipart_form': { 'field_name': 'ip_address' }})
    user_agent: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_agent') }, 'form': { 'field_name': 'user_agent' }, 'multipart_form': { 'field_name': 'user_agent' }})
    

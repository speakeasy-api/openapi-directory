import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SelectPsuAuthenticationMethod:
    r"""SelectPsuAuthenticationMethod
    Content of the body of a Select PSU authentication method request
    
    """
    
    authentication_method_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethodId') }})
    

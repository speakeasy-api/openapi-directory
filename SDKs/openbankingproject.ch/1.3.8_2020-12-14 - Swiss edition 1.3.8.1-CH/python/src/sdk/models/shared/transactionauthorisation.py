import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransactionAuthorisation:
    r"""TransactionAuthorisation
    Content of the body of a transaction authorisation request
    
    """
    
    sca_authentication_data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaAuthenticationData') }})
    

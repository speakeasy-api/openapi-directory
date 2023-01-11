import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import idpcredential as shared_idpcredential


@dataclass_json
@dataclasses.dataclass
class ListIdpCredentialsResponse:
    r"""ListIdpCredentialsResponse
    Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
    """
    
    idp_credentials: Optional[list[shared_idpcredential.IdpCredential]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpCredentials') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

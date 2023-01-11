import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inboundsamlssoprofile as shared_inboundsamlssoprofile


@dataclass_json
@dataclasses.dataclass
class ListInboundSamlSsoProfilesResponse:
    r"""ListInboundSamlSsoProfilesResponse
    Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
    """
    
    inbound_saml_sso_profiles: Optional[list[shared_inboundsamlssoprofile.InboundSamlSsoProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlSsoProfiles') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

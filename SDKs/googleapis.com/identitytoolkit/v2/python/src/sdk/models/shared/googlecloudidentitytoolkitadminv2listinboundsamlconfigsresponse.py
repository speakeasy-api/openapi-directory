import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2inboundsamlconfig as shared_googlecloudidentitytoolkitadminv2inboundsamlconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
    Response for ListInboundSamlConfigs
    """
    
    inbound_saml_configs: Optional[list[shared_googlecloudidentitytoolkitadminv2inboundsamlconfig.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

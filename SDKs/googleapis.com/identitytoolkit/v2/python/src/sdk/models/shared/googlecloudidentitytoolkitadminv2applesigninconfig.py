import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2codeflowconfig as shared_googlecloudidentitytoolkitadminv2codeflowconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
    Additional config for SignInWithApple.
    """
    
    bundle_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleIds') }})
    code_flow_config: Optional[shared_googlecloudidentitytoolkitadminv2codeflowconfig.GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeFlowConfig') }})
    

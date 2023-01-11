import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectagentresource as shared_connectagentresource


@dataclass_json
@dataclasses.dataclass
class GenerateConnectManifestResponse:
    r"""GenerateConnectManifestResponse
    GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
    """
    
    manifest: Optional[list[shared_connectagentresource.ConnectAgentResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    

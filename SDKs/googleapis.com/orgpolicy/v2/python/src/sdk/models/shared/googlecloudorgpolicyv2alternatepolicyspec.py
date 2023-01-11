import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2policyspec as shared_googlecloudorgpolicyv2policyspec
from ..shared import googlecloudorgpolicyv2policyspec as shared_googlecloudorgpolicyv2policyspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2AlternatePolicySpec:
    r"""GoogleCloudOrgpolicyV2AlternatePolicySpec
    Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
    """
    
    launch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launch') }})
    spec: Optional[shared_googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2AlternatePolicySpecInput:
    r"""GoogleCloudOrgpolicyV2AlternatePolicySpecInput
    Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
    """
    
    launch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launch') }})
    spec: Optional[shared_googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpecInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

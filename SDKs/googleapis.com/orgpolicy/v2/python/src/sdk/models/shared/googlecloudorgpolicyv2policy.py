import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2alternatepolicyspec as shared_googlecloudorgpolicyv2alternatepolicyspec
from ..shared import googlecloudorgpolicyv2policyspec as shared_googlecloudorgpolicyv2policyspec
from ..shared import googlecloudorgpolicyv2alternatepolicyspec as shared_googlecloudorgpolicyv2alternatepolicyspec
from ..shared import googlecloudorgpolicyv2policyspec as shared_googlecloudorgpolicyv2policyspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2Policy:
    r"""GoogleCloudOrgpolicyV2Policy
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    alternate: Optional[shared_googlecloudorgpolicyv2alternatepolicyspec.GoogleCloudOrgpolicyV2AlternatePolicySpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: Optional[shared_googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2PolicyInput:
    r"""GoogleCloudOrgpolicyV2PolicyInput
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    alternate: Optional[shared_googlecloudorgpolicyv2alternatepolicyspec.GoogleCloudOrgpolicyV2AlternatePolicySpecInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: Optional[shared_googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpecInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

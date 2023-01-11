import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicytroubleshooterv1accesstuple as shared_googlecloudpolicytroubleshooterv1accesstuple


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest:
    r"""GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest
    Request for TroubleshootIamPolicy.
    """
    
    access_tuple: Optional[shared_googlecloudpolicytroubleshooterv1accesstuple.GoogleCloudPolicytroubleshooterV1AccessTuple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTuple') }})
    

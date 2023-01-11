import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicytroubleshooterv1betaaccesstuple as shared_googlecloudpolicytroubleshooterv1betaaccesstuple


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest:
    r"""GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest
    Request for TroubleshootIamPolicy.
    """
    
    access_tuple: Optional[shared_googlecloudpolicytroubleshooterv1betaaccesstuple.GoogleCloudPolicytroubleshooterV1betaAccessTuple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTuple') }})
    

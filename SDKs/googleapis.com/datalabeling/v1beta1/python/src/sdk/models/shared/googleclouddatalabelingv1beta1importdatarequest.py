import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1inputconfig as shared_googleclouddatalabelingv1beta1inputconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ImportDataRequest:
    r"""GoogleCloudDatalabelingV1beta1ImportDataRequest
    Request message for ImportData API.
    """
    
    input_config: Optional[shared_googleclouddatalabelingv1beta1inputconfig.GoogleCloudDatalabelingV1beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    user_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmailAddress') }})
    

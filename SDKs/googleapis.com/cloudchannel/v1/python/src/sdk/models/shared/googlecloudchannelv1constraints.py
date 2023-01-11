import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1customerconstraints as shared_googlecloudchannelv1customerconstraints


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Constraints:
    r"""GoogleCloudChannelV1Constraints
    Represents the constraints for buying the Offer.
    """
    
    customer_constraints: Optional[shared_googlecloudchannelv1customerconstraints.GoogleCloudChannelV1CustomerConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerConstraints') }})
    

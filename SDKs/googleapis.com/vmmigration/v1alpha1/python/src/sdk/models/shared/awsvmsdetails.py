import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsvmdetails as shared_awsvmdetails


@dataclass_json
@dataclasses.dataclass
class AwsVmsDetails:
    r"""AwsVmsDetails
    AWSVmsDetails describes VMs in AWS.
    """
    
    details: Optional[list[shared_awsvmdetails.AwsVMDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    

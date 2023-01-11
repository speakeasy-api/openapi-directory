import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vmwarevmdetails as shared_vmwarevmdetails


@dataclass_json
@dataclasses.dataclass
class VmwareVmsDetails:
    r"""VmwareVmsDetails
    VmwareVmsDetails describes VMs in vCenter.
    """
    
    details: Optional[list[shared_vmwarevmdetails.VmwareVMDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    

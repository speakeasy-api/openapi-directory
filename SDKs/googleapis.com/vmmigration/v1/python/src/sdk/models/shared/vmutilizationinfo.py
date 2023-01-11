import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vmutilizationmetrics as shared_vmutilizationmetrics
from ..shared import vmwarevmdetails as shared_vmwarevmdetails
from ..shared import vmwarevmdetails as shared_vmwarevmdetails


@dataclass_json
@dataclasses.dataclass
class VMUtilizationInfo:
    r"""VMUtilizationInfo
    Utilization information of a single VM.
    """
    
    utilization: Optional[shared_vmutilizationmetrics.VMUtilizationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilization') }})
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vmware_vm_details: Optional[shared_vmwarevmdetails.VmwareVMDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVmDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class VMUtilizationInfoInput:
    r"""VMUtilizationInfoInput
    Utilization information of a single VM.
    """
    
    utilization: Optional[shared_vmutilizationmetrics.VMUtilizationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilization') }})
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vmware_vm_details: Optional[shared_vmwarevmdetails.VmwareVMDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVmDetails') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KernelRootkit:
    r"""KernelRootkit
    Kernel mode rootkit signatures.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    unexpected_code_modification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedCodeModification') }})
    unexpected_ftrace_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedFtraceHandler') }})
    unexpected_interrupt_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedInterruptHandler') }})
    unexpected_kernel_code_pages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedKernelCodePages') }})
    unexpected_kprobe_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedKprobeHandler') }})
    unexpected_processes_in_runqueue: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedProcessesInRunqueue') }})
    unexpected_read_only_data_modification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedReadOnlyDataModification') }})
    unexpected_system_call_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedSystemCallHandler') }})
    

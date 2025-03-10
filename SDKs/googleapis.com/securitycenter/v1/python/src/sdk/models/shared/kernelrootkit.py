"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class KernelRootkit:
    r"""Kernel mode rootkit signatures."""
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Rootkit name when available."""  
    unexpected_code_modification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedCodeModification'), 'exclude': lambda f: f is None }})
    r"""True when unexpected modifications of kernel code memory are present."""  
    unexpected_ftrace_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedFtraceHandler'), 'exclude': lambda f: f is None }})
    r"""True when `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range."""  
    unexpected_interrupt_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedInterruptHandler'), 'exclude': lambda f: f is None }})
    r"""True when interrupt handlers that are are not in the expected kernel or module code regions are present."""  
    unexpected_kernel_code_pages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedKernelCodePages'), 'exclude': lambda f: f is None }})
    r"""True when kernel code pages that are not in the expected kernel or module code regions are present."""  
    unexpected_kprobe_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedKprobeHandler'), 'exclude': lambda f: f is None }})
    r"""True when `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range."""  
    unexpected_processes_in_runqueue: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedProcessesInRunqueue'), 'exclude': lambda f: f is None }})
    r"""True when unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list."""  
    unexpected_read_only_data_modification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedReadOnlyDataModification'), 'exclude': lambda f: f is None }})
    r"""True when unexpected modifications of kernel read-only data memory are present."""  
    unexpected_system_call_handler: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unexpectedSystemCallHandler'), 'exclude': lambda f: f is None }})
    r"""True when system call handlers that are are not in the expected kernel or module code regions are present."""  
    
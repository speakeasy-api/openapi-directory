import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cpuinfo as shared_cpuinfo
from ..shared import memoryinfo as shared_memoryinfo


@dataclass_json
@dataclasses.dataclass
class PerfEnvironment:
    r"""PerfEnvironment
    Encapsulates performance environment info
    """
    
    cpu_info: Optional[shared_cpuinfo.CPUInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuInfo') }})
    memory_info: Optional[shared_memoryinfo.MemoryInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    

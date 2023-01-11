import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import badresponsesfaultconfig as shared_badresponsesfaultconfig
from ..shared import largerequestfaultconfig as shared_largerequestfaultconfig
from ..shared import largeresponsefaultconfig as shared_largeresponsefaultconfig
from ..shared import latencyinjectionfaultconfig as shared_latencyinjectionfaultconfig


@dataclass_json
@dataclasses.dataclass
class ChaosConfig:
    r"""ChaosConfig
    Configuration for the faults that can be injected in requests
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    bad_responses_fault_config: Optional[shared_badresponsesfaultconfig.BadResponsesFaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badResponsesFaultConfig') }})
    large_request_fault_config: Optional[shared_largerequestfaultconfig.LargeRequestFaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeRequestFaultConfig') }})
    large_response_fault_config: Optional[shared_largeresponsefaultconfig.LargeResponseFaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeResponseFaultConfig') }})
    latency_injection_fault_config: Optional[shared_latencyinjectionfaultconfig.LatencyInjectionFaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyInjectionFaultConfig') }})
    

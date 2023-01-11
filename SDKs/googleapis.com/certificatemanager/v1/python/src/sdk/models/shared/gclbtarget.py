import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipconfig as shared_ipconfig


@dataclass_json
@dataclasses.dataclass
class GclbTarget:
    r"""GclbTarget
    Describes a Target Proxy that uses this Certificate Map.
    """
    
    ip_configs: Optional[list[shared_ipconfig.IPConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfigs') }})
    target_https_proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetHttpsProxy') }})
    target_ssl_proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSslProxy') }})
    

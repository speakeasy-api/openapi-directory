import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlaclentry as shared_sqlaclentry


@dataclass_json
@dataclasses.dataclass
class SQLIPConfig:
    r"""SQLIPConfig
    IP Management configuration.
    """
    
    authorized_networks: Optional[list[shared_sqlaclentry.SQLACLEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetworks') }})
    enable_ipv4: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIpv4') }})
    private_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    require_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireSsl') }})
    

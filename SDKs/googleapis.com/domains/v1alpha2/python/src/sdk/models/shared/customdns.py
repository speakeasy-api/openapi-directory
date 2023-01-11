import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dsrecord as shared_dsrecord


@dataclass_json
@dataclasses.dataclass
class CustomDNS:
    r"""CustomDNS
    Configuration for an arbitrary DNS provider.
    """
    
    ds_records: Optional[list[shared_dsrecord.DsRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsRecords') }})
    name_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    

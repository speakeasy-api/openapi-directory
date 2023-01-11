import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exfilresource as shared_exfilresource


@dataclass_json
@dataclasses.dataclass
class Exfiltration:
    r"""Exfiltration
    Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
    """
    
    sources: Optional[list[shared_exfilresource.ExfilResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    targets: Optional[list[shared_exfilresource.ExfilResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SSHKey:
    r"""SSHKey
    An SSH key, used for authorizing with the interactive serial console feature.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    

@dataclass_json
@dataclasses.dataclass
class SSHKeyInput:
    r"""SSHKeyInput
    An SSH key, used for authorizing with the interactive serial console feature.
    """
    
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    

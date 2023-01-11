import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EsAlgoSettings:
    r"""EsAlgoSettings
    Settings for an EC + SHA signing algorithm
    """
    
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    

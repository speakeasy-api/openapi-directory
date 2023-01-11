import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sandboxcardinfo as shared_sandboxcardinfo
from ..shared import sandboxparty as shared_sandboxparty
from ..shared import sandboxstatement as shared_sandboxstatement
from ..shared import sandboxtransaction as shared_sandboxtransaction


@dataclass_json
@dataclasses.dataclass
class SandboxCard:
    r"""SandboxCard
    Sandbox card
    """
    
    info: Optional[shared_sandboxcardinfo.SandboxCardInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    party: Optional[shared_sandboxparty.SandboxParty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    statements: Optional[list[shared_sandboxstatement.SandboxStatement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    transactions: Optional[list[shared_sandboxtransaction.SandboxTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

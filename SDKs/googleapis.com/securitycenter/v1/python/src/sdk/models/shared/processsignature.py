import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memoryhashsignature as shared_memoryhashsignature
from ..shared import yararulesignature as shared_yararulesignature


@dataclass_json
@dataclasses.dataclass
class ProcessSignature:
    r"""ProcessSignature
    Indicates what signature matched this process.
    """
    
    memory_hash_signature: Optional[shared_memoryhashsignature.MemoryHashSignature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryHashSignature') }})
    yara_rule_signature: Optional[shared_yararulesignature.YaraRuleSignature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaraRuleSignature') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class YaraRuleSignature:
    r"""YaraRuleSignature
    A signature corresponding to a YARA rule.
    """
    
    yara_rule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaraRule') }})
    

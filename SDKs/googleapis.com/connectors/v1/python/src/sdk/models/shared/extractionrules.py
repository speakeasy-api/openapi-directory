import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extractionrule as shared_extractionrule


@dataclass_json
@dataclasses.dataclass
class ExtractionRules:
    r"""ExtractionRules
    Extraction Rules to identity the backends from customer provided configuration in Connection resource.
    """
    
    extraction_rule: Optional[list[shared_extractionrule.ExtractionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionRule') }})
    

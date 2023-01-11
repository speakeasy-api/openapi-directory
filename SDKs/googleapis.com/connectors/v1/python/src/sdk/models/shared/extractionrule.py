import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class ExtractionRule:
    r"""ExtractionRule
    Extraction Rule.
    """
    
    extraction_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionRegex') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

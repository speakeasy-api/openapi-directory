import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcssource as shared_gcssource


@dataclass_json
@dataclasses.dataclass
class GlossaryInputConfig:
    r"""GlossaryInputConfig
    Input configuration for glossaries.
    """
    
    gcs_source: Optional[shared_gcssource.GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    

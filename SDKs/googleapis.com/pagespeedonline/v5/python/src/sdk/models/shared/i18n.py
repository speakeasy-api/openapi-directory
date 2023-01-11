import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rendererformattedstrings as shared_rendererformattedstrings


@dataclass_json
@dataclasses.dataclass
class I18n:
    r"""I18n
    Message containing the i18n data for the LHR - Version 1.
    """
    
    renderer_formatted_strings: Optional[shared_rendererformattedstrings.RendererFormattedStrings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rendererFormattedStrings') }})
    

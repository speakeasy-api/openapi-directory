import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import themecolorpair as shared_themecolorpair


@dataclass_json
@dataclasses.dataclass
class SpreadsheetTheme:
    r"""SpreadsheetTheme
    Represents spreadsheet theme
    """
    
    primary_font_family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryFontFamily') }})
    theme_colors: Optional[list[shared_themecolorpair.ThemeColorPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeColors') }})
    

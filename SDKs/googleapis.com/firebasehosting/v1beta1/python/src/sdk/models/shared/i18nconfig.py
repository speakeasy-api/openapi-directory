import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class I18nConfig:
    r"""I18nConfig
    If provided, i18n rewrites are enabled.
    """
    
    root: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    

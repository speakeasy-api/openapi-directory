import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DesktopInfo:
    r"""DesktopInfo
    Desktop related attributes to the Dynamic Link.
    """
    
    desktop_fallback_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopFallbackLink') }})
    

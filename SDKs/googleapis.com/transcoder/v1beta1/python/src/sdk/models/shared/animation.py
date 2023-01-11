import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import animationend as shared_animationend
from ..shared import animationfade as shared_animationfade
from ..shared import animationstatic as shared_animationstatic


@dataclass_json
@dataclasses.dataclass
class Animation:
    r"""Animation
    Animation types.
    """
    
    animation_end: Optional[shared_animationend.AnimationEnd] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationEnd') }})
    animation_fade: Optional[shared_animationfade.AnimationFade] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationFade') }})
    animation_static: Optional[shared_animationstatic.AnimationStatic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationStatic') }})
    

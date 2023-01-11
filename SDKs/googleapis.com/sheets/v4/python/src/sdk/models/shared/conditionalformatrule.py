import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleanrule as shared_booleanrule
from ..shared import gradientrule as shared_gradientrule
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class ConditionalFormatRule:
    r"""ConditionalFormatRule
    A rule describing a conditional format.
    """
    
    boolean_rule: Optional[shared_booleanrule.BooleanRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanRule') }})
    gradient_rule: Optional[shared_gradientrule.GradientRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradientRule') }})
    ranges: Optional[list[shared_gridrange.GridRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    

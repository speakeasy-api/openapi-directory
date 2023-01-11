import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTargetsAllNeedsAttentionPie200ApplicationJSON0:
    r"""GetTargetsAllNeedsAttentionPie200ApplicationJSON0
    These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
    
    """
    
    zero: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllNeedsAttentionPie200ApplicationJSON1:
    r"""GetTargetsAllNeedsAttentionPie200ApplicationJSON1
    These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
    
    """
    
    zero: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllNeedsAttentionPie200ApplicationJSON:
    zero: Optional[GetTargetsAllNeedsAttentionPie200ApplicationJSON0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[GetTargetsAllNeedsAttentionPie200ApplicationJSON1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclasses.dataclass
class GetTargetsAllNeedsAttentionPieResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_needs_attention_pie_200_application_json_object: Optional[GetTargetsAllNeedsAttentionPie200ApplicationJSON] = dataclasses.field(default=None)
    

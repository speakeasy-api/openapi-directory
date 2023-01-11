import dataclasses
from typing import Optional
from ..shared import taginstance as shared_taginstance


@dataclasses.dataclass
class PutUserTagsTagIDShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserTagsTagIDShowsShowIDRequest:
    path_params: PutUserTagsTagIDShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutUserTagsTagIDShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_instance: Optional[shared_taginstance.TagInstance] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from enum import Enum
from ..shared import taginstance as shared_taginstance


@dataclasses.dataclass
class GetUserTagsTagIDShowsPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    
class GetUserTagsTagIDShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclasses.dataclass
class GetUserTagsTagIDShowsQueryParams:
    embed: Optional[GetUserTagsTagIDShowsEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserTagsTagIDShowsRequest:
    path_params: GetUserTagsTagIDShowsPathParams = dataclasses.field()
    query_params: GetUserTagsTagIDShowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserTagsTagIDShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_instances: Optional[list[shared_taginstance.TagInstance]] = dataclasses.field(default=None)
    

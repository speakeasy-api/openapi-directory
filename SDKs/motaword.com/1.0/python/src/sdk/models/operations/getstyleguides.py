import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import styleguidelist as shared_styleguidelist


@dataclasses.dataclass
class GetStyleGuidesPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetStyleGuidesWithEnum(str, Enum):
    PREVIEW = "preview"


@dataclasses.dataclass
class GetStyleGuidesQueryParams:
    with_: Optional[list[GetStyleGuidesWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStyleGuidesRequest:
    path_params: GetStyleGuidesPathParams = dataclasses.field()
    query_params: GetStyleGuidesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStyleGuidesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    style_guide_list: Optional[shared_styleguidelist.StyleGuideList] = dataclasses.field(default=None)
    

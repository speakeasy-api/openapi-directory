import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tag as shared_tag


@dataclasses.dataclass
class CreateTagPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class CreateTagTypeEnum(str, Enum):
    REGULAR = "Regular"
    NEGATIVE = "Negative"


@dataclasses.dataclass
class CreateTagQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    type: Optional[CreateTagTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateTagHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTagRequest:
    headers: CreateTagHeaders = dataclasses.field()
    path_params: CreateTagPathParams = dataclasses.field()
    query_params: CreateTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    

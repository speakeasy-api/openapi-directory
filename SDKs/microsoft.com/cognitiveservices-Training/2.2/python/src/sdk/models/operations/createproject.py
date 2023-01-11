import dataclasses
from typing import Optional
from enum import Enum
from ..shared import project as shared_project

class CreateProjectClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"


@dataclasses.dataclass
class CreateProjectQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    classification_type: Optional[CreateProjectClassificationTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationType', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    domain_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateProjectHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProjectRequest:
    headers: CreateProjectHeaders = dataclasses.field()
    query_params: CreateProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    

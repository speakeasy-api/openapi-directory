import dataclasses
from typing import Optional
from enum import Enum
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import project as shared_project

class CreateProjectClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"

class CreateProjectTargetExportPlatformsEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"
    VAIDK = "VAIDK"


@dataclasses.dataclass
class CreateProjectQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    classification_type: Optional[CreateProjectClassificationTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationType', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    domain_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainId', 'style': 'form', 'explode': True }})
    target_export_platforms: Optional[list[CreateProjectTargetExportPlatformsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetExportPlatforms', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class CreateProjectRequest:
    query_params: CreateProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    

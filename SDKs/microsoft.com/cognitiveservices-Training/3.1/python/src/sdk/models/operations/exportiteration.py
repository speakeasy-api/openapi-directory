import dataclasses
from typing import Optional
from enum import Enum
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import export as shared_export


@dataclasses.dataclass
class ExportIterationPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class ExportIterationFlavorEnum(str, Enum):
    LINUX = "Linux"
    WINDOWS = "Windows"
    ONNX10 = "ONNX10"
    ONNX12 = "ONNX12"
    ARM = "ARM"
    TENSOR_FLOW_NORMAL = "TensorFlowNormal"
    TENSOR_FLOW_LITE = "TensorFlowLite"

class ExportIterationPlatformEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"
    VAIDK = "VAIDK"


@dataclasses.dataclass
class ExportIterationQueryParams:
    platform: ExportIterationPlatformEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    flavor: Optional[ExportIterationFlavorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportIterationHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportIterationRequest:
    headers: ExportIterationHeaders = dataclasses.field()
    path_params: ExportIterationPathParams = dataclasses.field()
    query_params: ExportIterationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportIterationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    export: Optional[shared_export.Export] = dataclasses.field(default=None)
    

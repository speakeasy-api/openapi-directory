import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectSettingsClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"

class ProjectSettingsTargetExportPlatformsEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"
    VAIDK = "VAIDK"


@dataclass_json
@dataclasses.dataclass
class ProjectSettings:
    r"""ProjectSettings
    Represents settings associated with a project.
    """
    
    classification_type: Optional[ProjectSettingsClassificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }, 'form': { 'field_name': 'classificationType' }})
    domain_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainId') }, 'form': { 'field_name': 'domainId' }})
    target_export_platforms: Optional[list[ProjectSettingsTargetExportPlatformsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetExportPlatforms') }, 'form': { 'field_name': 'targetExportPlatforms' }})
    

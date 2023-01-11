import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExportFlavorEnum(str, Enum):
    LINUX = "Linux"
    WINDOWS = "Windows"
    ONNX10 = "ONNX10"
    ONNX12 = "ONNX12"
    ARM = "ARM"

class ExportPlatformEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"
    VAIDK = "VAIDK"

class ExportStatusEnum(str, Enum):
    EXPORTING = "Exporting"
    FAILED = "Failed"
    DONE = "Done"


@dataclass_json
@dataclasses.dataclass
class Export:
    download_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUri') }})
    flavor: Optional[ExportFlavorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flavor') }})
    newer_version_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newerVersionAvailable') }})
    platform: Optional[ExportPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    status: Optional[ExportStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

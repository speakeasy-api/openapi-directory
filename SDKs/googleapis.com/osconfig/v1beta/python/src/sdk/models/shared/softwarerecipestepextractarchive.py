import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SoftwareRecipeStepExtractArchiveTypeEnum(str, Enum):
    ARCHIVE_TYPE_UNSPECIFIED = "ARCHIVE_TYPE_UNSPECIFIED"
    TAR = "TAR"
    TAR_GZIP = "TAR_GZIP"
    TAR_BZIP = "TAR_BZIP"
    TAR_LZMA = "TAR_LZMA"
    TAR_XZ = "TAR_XZ"
    ZIP = "ZIP"


@dataclass_json
@dataclasses.dataclass
class SoftwareRecipeStepExtractArchive:
    r"""SoftwareRecipeStepExtractArchive
    Extracts an archive of the type specified in the specified directory.
    """
    
    artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    type: Optional[SoftwareRecipeStepExtractArchiveTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

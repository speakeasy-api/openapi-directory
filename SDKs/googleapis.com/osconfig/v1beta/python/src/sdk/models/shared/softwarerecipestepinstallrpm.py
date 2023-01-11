import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SoftwareRecipeStepInstallRpm:
    r"""SoftwareRecipeStepInstallRpm
    Installs an rpm file via the rpm utility.
    """
    
    artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    

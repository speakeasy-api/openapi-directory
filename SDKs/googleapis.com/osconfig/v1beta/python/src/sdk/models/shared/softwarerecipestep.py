import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import softwarerecipestepextractarchive as shared_softwarerecipestepextractarchive
from ..shared import softwarerecipestepinstalldpkg as shared_softwarerecipestepinstalldpkg
from ..shared import softwarerecipestepcopyfile as shared_softwarerecipestepcopyfile
from ..shared import softwarerecipestepexecfile as shared_softwarerecipestepexecfile
from ..shared import softwarerecipestepinstallmsi as shared_softwarerecipestepinstallmsi
from ..shared import softwarerecipestepinstallrpm as shared_softwarerecipestepinstallrpm
from ..shared import softwarerecipesteprunscript as shared_softwarerecipesteprunscript


@dataclass_json
@dataclasses.dataclass
class SoftwareRecipeStep:
    r"""SoftwareRecipeStep
    An action that can be taken as part of installing or updating a recipe.
    """
    
    archive_extraction: Optional[shared_softwarerecipestepextractarchive.SoftwareRecipeStepExtractArchive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveExtraction') }})
    dpkg_installation: Optional[shared_softwarerecipestepinstalldpkg.SoftwareRecipeStepInstallDpkg] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpkgInstallation') }})
    file_copy: Optional[shared_softwarerecipestepcopyfile.SoftwareRecipeStepCopyFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileCopy') }})
    file_exec: Optional[shared_softwarerecipestepexecfile.SoftwareRecipeStepExecFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExec') }})
    msi_installation: Optional[shared_softwarerecipestepinstallmsi.SoftwareRecipeStepInstallMsi] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msiInstallation') }})
    rpm_installation: Optional[shared_softwarerecipestepinstallrpm.SoftwareRecipeStepInstallRpm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpmInstallation') }})
    script_run: Optional[shared_softwarerecipesteprunscript.SoftwareRecipeStepRunScript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptRun') }})
    

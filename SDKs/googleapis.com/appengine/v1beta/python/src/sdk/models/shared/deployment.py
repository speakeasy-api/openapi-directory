import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildinfo as shared_buildinfo
from ..shared import cloudbuildoptions as shared_cloudbuildoptions
from ..shared import containerinfo as shared_containerinfo
from ..shared import fileinfo as shared_fileinfo
from ..shared import zipinfo as shared_zipinfo


@dataclass_json
@dataclasses.dataclass
class Deployment:
    r"""Deployment
    Code and application artifacts used to deploy a version to App Engine.
    """
    
    build: Optional[shared_buildinfo.BuildInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    cloud_build_options: Optional[shared_cloudbuildoptions.CloudBuildOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudBuildOptions') }})
    container: Optional[shared_containerinfo.ContainerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    files: Optional[dict[str, shared_fileinfo.FileInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    zip: Optional[shared_zipinfo.ZipInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

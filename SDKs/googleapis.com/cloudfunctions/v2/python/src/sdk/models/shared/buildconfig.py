import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source
from ..shared import sourceprovenance as shared_sourceprovenance

class BuildConfigDockerRegistryEnum(str, Enum):
    DOCKER_REGISTRY_UNSPECIFIED = "DOCKER_REGISTRY_UNSPECIFIED"
    CONTAINER_REGISTRY = "CONTAINER_REGISTRY"
    ARTIFACT_REGISTRY = "ARTIFACT_REGISTRY"


@dataclass_json
@dataclasses.dataclass
class BuildConfigInput:
    r"""BuildConfigInput
    Describes the Build step of the function that builds a container from the given source.
    """
    
    buildpack_stack: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildpackStack') }})
    docker_registry: Optional[BuildConfigDockerRegistryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRegistry') }})
    docker_repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    entry_point: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    runtime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_provenance: Optional[shared_sourceprovenance.SourceProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProvenance') }})
    worker_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    

@dataclass_json
@dataclasses.dataclass
class BuildConfig:
    r"""BuildConfig
    Describes the Build step of the function that builds a container from the given source.
    """
    
    build: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    buildpack_stack: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildpackStack') }})
    docker_registry: Optional[BuildConfigDockerRegistryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRegistry') }})
    docker_repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    entry_point: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    runtime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_provenance: Optional[shared_sourceprovenance.SourceProvenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProvenance') }})
    worker_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    

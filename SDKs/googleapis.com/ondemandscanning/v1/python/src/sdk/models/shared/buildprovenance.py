import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifact as shared_artifact
from ..shared import command as shared_command
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class BuildProvenance:
    r"""BuildProvenance
    Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
    """
    
    build_options: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildOptions') }})
    builder_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builderVersion') }})
    built_artifacts: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtArtifacts') }})
    commands: Optional[list[shared_command.Command]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logs_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsUri') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    source_provenance: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProvenance') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    trigger_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    

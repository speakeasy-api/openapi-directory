import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcecontext as shared_sourcecontext
from ..shared import filehashes as shared_filehashes


@dataclass_json
@dataclasses.dataclass
class Source:
    r"""Source
    Source describes the location of the source used for the build.
    """
    
    additional_contexts: Optional[list[shared_sourcecontext.SourceContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalContexts') }})
    artifact_storage_source_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStorageSourceUri') }})
    context: Optional[shared_sourcecontext.SourceContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    file_hashes: Optional[dict[str, shared_filehashes.FileHashes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileHashes') }})
    

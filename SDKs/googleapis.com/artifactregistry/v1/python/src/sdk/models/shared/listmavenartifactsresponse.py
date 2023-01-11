import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mavenartifact as shared_mavenartifact


@dataclass_json
@dataclasses.dataclass
class ListMavenArtifactsResponse:
    r"""ListMavenArtifactsResponse
    The response from listing maven artifacts.
    """
    
    maven_artifacts: Optional[list[shared_mavenartifact.MavenArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mavenArtifacts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

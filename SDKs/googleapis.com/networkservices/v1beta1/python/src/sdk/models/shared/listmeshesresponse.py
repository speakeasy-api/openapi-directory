import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mesh as shared_mesh


@dataclass_json
@dataclasses.dataclass
class ListMeshesResponse:
    r"""ListMeshesResponse
    Response returned by the ListMeshes method.
    """
    
    meshes: Optional[list[shared_mesh.Mesh]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

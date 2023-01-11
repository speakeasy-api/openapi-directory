import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dockerimage as shared_dockerimage


@dataclass_json
@dataclasses.dataclass
class ListDockerImagesResponse:
    r"""ListDockerImagesResponse
    The response from listing docker images.
    """
    
    docker_images: Optional[list[shared_dockerimage.DockerImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImages') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

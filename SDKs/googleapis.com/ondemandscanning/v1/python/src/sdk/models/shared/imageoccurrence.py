import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fingerprint as shared_fingerprint
from ..shared import layer as shared_layer


@dataclass_json
@dataclasses.dataclass
class ImageOccurrence:
    r"""ImageOccurrence
    Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
    """
    
    base_resource_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseResourceUrl') }})
    distance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    fingerprint: Optional[shared_fingerprint.Fingerprint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    layer_info: Optional[list[shared_layer.Layer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerInfo') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p4beta1Edge:
    r"""GoogleCloudAssetV1p4beta1Edge
    A directional edge.
    """
    
    source_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceNode') }})
    target_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNode') }})
    

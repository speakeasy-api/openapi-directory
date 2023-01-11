import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node as shared_node
from ..shared import perxdsconfig as shared_perxdsconfig


@dataclass_json
@dataclasses.dataclass
class ClientConfig:
    r"""ClientConfig
    All xds configs for a particular client.
    """
    
    node: Optional[shared_node.Node] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    xds_config: Optional[list[shared_perxdsconfig.PerXdsConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xdsConfig') }})
    

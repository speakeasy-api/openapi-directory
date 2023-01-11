import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodespec as shared_nodespec
from ..shared import nodespec as shared_nodespec


@dataclass_json
@dataclasses.dataclass
class Tpu:
    r"""Tpu
    Details of the TPU resource(s) being requested.
    """
    
    node_spec: Optional[list[shared_nodespec.NodeSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSpec') }})
    

@dataclass_json
@dataclasses.dataclass
class TpuInput:
    r"""TpuInput
    Details of the TPU resource(s) being requested.
    """
    
    node_spec: Optional[list[shared_nodespec.NodeSpecInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSpec') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2GrpcAction:
    r"""GoogleCloudRunV2GrpcAction
    GRPCAction describes an action involving a GRPC port.
    """
    
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    

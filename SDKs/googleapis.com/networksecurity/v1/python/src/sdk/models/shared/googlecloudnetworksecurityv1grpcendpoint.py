import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudNetworksecurityV1GrpcEndpoint:
    r"""GoogleCloudNetworksecurityV1GrpcEndpoint
    Specification of the GRPC Endpoint.
    """
    
    target_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUri') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InjectCredentialsRequest:
    r"""InjectCredentialsRequest
    A request to inject credentials into a cluster.
    """
    
    cluster_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    credentials_ciphertext: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsCiphertext') }})
    

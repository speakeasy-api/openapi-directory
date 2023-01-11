import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumer as shared_consumer
from ..shared import consumer as shared_consumer


@dataclass_json
@dataclasses.dataclass
class NetworkConfig:
    r"""NetworkConfig
    Network configuration for the Dataproc Metastore service.
    """
    
    consumers: Optional[list[shared_consumer.Consumer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumers') }})
    

@dataclass_json
@dataclasses.dataclass
class NetworkConfigInput:
    r"""NetworkConfigInput
    Network configuration for the Dataproc Metastore service.
    """
    
    consumers: Optional[list[shared_consumer.ConsumerInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumers') }})
    

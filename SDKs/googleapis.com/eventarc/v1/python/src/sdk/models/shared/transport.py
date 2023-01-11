import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pubsub as shared_pubsub
from ..shared import pubsub as shared_pubsub


@dataclass_json
@dataclasses.dataclass
class Transport:
    r"""Transport
    Represents the transport intermediaries created for the trigger to deliver events.
    """
    
    pubsub: Optional[shared_pubsub.Pubsub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsub') }})
    

@dataclass_json
@dataclasses.dataclass
class TransportInput:
    r"""TransportInput
    Represents the transport intermediaries created for the trigger to deliver events.
    """
    
    pubsub: Optional[shared_pubsub.PubsubInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsub') }})
    

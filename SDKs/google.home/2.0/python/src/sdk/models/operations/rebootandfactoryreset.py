import dataclasses
from typing import Optional
from ..shared import rebootandfactoryresetrequest as shared_rebootandfactoryresetrequest


@dataclasses.dataclass
class RebootandFactoryResetRequest:
    request: shared_rebootandfactoryresetrequest.RebootandFactoryResetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RebootandFactoryResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rebootand_factory_reset_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    

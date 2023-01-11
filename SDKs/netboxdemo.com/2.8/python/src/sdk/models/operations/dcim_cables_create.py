import dataclasses
from typing import Optional
from ..shared import writablecable as shared_writablecable
from ..shared import cable as shared_cable


@dataclasses.dataclass
class DcimCablesCreateRequest:
    request: shared_writablecable.WritableCableInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimCablesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cable: Optional[shared_cable.Cable] = dataclasses.field(default=None)
    

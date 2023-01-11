import dataclasses
from typing import Optional
from ..shared import writableinterface as shared_writableinterface
from ..shared import interface as shared_interface


@dataclasses.dataclass
class VirtualizationInterfacesCreateRequest:
    request: shared_writableinterface.WritableInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationInterfacesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface: Optional[shared_interface.Interface] = dataclasses.field(default=None)
    

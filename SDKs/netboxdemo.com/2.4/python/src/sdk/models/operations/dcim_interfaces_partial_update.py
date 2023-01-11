import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableinterface as shared_writableinterface
from ..shared import interface as shared_interface


@dataclasses.dataclass
class DcimInterfacesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesPartialUpdateRequest:
    path_params: DcimInterfacesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableinterface.WritableInterfaceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfacesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface: Optional[shared_interface.Interface] = dataclasses.field(default=None)
    

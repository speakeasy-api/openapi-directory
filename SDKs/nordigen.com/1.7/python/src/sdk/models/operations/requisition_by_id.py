import dataclasses
from typing import Optional
from ..shared import requisition as shared_requisition


@dataclasses.dataclass
class RequisitionByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RequisitionByIDRequest:
    path_params: RequisitionByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RequisitionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    requisition: Optional[shared_requisition.Requisition] = dataclasses.field(default=None)
    

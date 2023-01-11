import dataclasses
from typing import Optional
from ..shared import requisition as shared_requisition
from ..shared import requisition as shared_requisition


@dataclasses.dataclass
class CreateANewRequisitionRequestsInput:
    requisition: Optional[shared_requisition.RequisitionInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    requisition1: Optional[shared_requisition.RequisitionInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    requisition2: Optional[shared_requisition.RequisitionInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateANewRequisitionRequest:
    request: CreateANewRequisitionRequestsInput = dataclasses.field()
    

@dataclasses.dataclass
class CreateANewRequisitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    requisition: Optional[shared_requisition.Requisition] = dataclasses.field(default=None)
    

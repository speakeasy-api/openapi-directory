import dataclasses
from typing import Optional
from ..shared import requisitionlinkparams as shared_requisitionlinkparams
from ..shared import requisitionlinks as shared_requisitionlinks


@dataclasses.dataclass
class CreateAspspAuthorizationLinkPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAspspAuthorizationLinkRequests:
    requisition_link_params: Optional[shared_requisitionlinkparams.RequisitionLinkParams] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    requisition_link_params1: Optional[shared_requisitionlinkparams.RequisitionLinkParams] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    requisition_link_params2: Optional[shared_requisitionlinkparams.RequisitionLinkParams] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateAspspAuthorizationLinkRequest:
    path_params: CreateAspspAuthorizationLinkPathParams = dataclasses.field()
    request: CreateAspspAuthorizationLinkRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateAspspAuthorizationLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    requisition_links: Optional[shared_requisitionlinks.RequisitionLinks] = dataclasses.field(default=None)
    

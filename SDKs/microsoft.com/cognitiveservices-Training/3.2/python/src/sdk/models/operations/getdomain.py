import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import domain as shared_domain


@dataclasses.dataclass
class GetDomainPathParams:
    domain_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    domain: Optional[shared_domain.Domain] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import domain as shared_domain


@dataclasses.dataclass
class GetDomainsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainsRequest:
    headers: GetDomainsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    domains: Optional[list[shared_domain.Domain]] = dataclasses.field(default=None)
    

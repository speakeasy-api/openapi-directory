import dataclasses
from typing import Optional


@dataclasses.dataclass
class RegistrationsViewOnlyLinksReadPathParams:
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsViewOnlyLinksReadRequest:
    path_params: RegistrationsViewOnlyLinksReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsViewOnlyLinksReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    

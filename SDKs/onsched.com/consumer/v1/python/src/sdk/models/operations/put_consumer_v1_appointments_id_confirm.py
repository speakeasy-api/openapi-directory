import dataclasses
from typing import Optional


@dataclasses.dataclass
class PutConsumerV1AppointmentsIDConfirmPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDConfirmQueryParams:
    undo: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'undo', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDConfirmRequest:
    path_params: PutConsumerV1AppointmentsIDConfirmPathParams = dataclasses.field()
    query_params: PutConsumerV1AppointmentsIDConfirmQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDConfirmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

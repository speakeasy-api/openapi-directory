import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PutConsumerV1AppointmentsIDNoshowPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDNoshowRequests:
    appointment_no_show_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_no_show_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_no_show_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_no_show_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDNoshowRequest:
    path_params: PutConsumerV1AppointmentsIDNoshowPathParams = dataclasses.field()
    request: Optional[PutConsumerV1AppointmentsIDNoshowRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutConsumerV1AppointmentsIDNoshowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

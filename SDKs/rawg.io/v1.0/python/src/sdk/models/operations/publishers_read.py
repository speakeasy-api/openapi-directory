import dataclasses
from typing import Optional
from ..shared import publishersingle as shared_publishersingle


@dataclasses.dataclass
class PublishersReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishersReadRequest:
    path_params: PublishersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PublishersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    publisher_single: Optional[shared_publishersingle.PublisherSingle] = dataclasses.field(default=None)
    

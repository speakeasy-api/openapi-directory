import dataclasses
from typing import Optional
from ..shared import attribute as shared_attribute


@dataclasses.dataclass
class GetAttributesComputedQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAttributesComputedRequest:
    query_params: GetAttributesComputedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAttributesComputedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None)
    

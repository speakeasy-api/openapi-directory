import dataclasses
from typing import Optional
from enum import Enum
from ..shared import nametype_enum as shared_nametype_enum


@dataclasses.dataclass
class GetAPINameQueryParams:
    name_type: shared_nametype_enum.NameTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'nameType', 'style': 'form', 'explode': True }})
    quantity: int = dataclasses.field(metadata={'query_param': { 'field_name': 'quantity', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPINameHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPINameRequest:
    headers: GetAPINameHeaders = dataclasses.field()
    query_params: GetAPINameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPINameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

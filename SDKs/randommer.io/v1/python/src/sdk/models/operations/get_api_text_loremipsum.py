import dataclasses
from typing import Optional
from enum import Enum
from ..shared import loremtype_enum as shared_loremtype_enum
from ..shared import texttype_enum as shared_texttype_enum


@dataclasses.dataclass
class GetAPITextLoremIpsumQueryParams:
    lorem_type: shared_loremtype_enum.LoremTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'loremType', 'style': 'form', 'explode': True }})
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    type: shared_texttype_enum.TextTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPITextLoremIpsumHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPITextLoremIpsumRequest:
    headers: GetAPITextLoremIpsumHeaders = dataclasses.field()
    query_params: GetAPITextLoremIpsumQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPITextLoremIpsumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

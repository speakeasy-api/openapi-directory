import dataclasses
from typing import Optional
from enum import Enum
from ..shared import idtype_enum as shared_idtype_enum
from ..shared import numbervalidation as shared_numbervalidation


@dataclasses.dataclass
class PostAPISocialNumberQueryParams:
    id_type: shared_idtype_enum.IDTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'idType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAPISocialNumberHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAPISocialNumberRequests:
    number_validation: Optional[shared_numbervalidation.NumberValidation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    number_validation1: Optional[shared_numbervalidation.NumberValidation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    number_validation2: Optional[shared_numbervalidation.NumberValidation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    number_validation3: Optional[shared_numbervalidation.NumberValidation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostAPISocialNumberRequest:
    headers: PostAPISocialNumberHeaders = dataclasses.field()
    query_params: PostAPISocialNumberQueryParams = dataclasses.field()
    request: PostAPISocialNumberRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostAPISocialNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

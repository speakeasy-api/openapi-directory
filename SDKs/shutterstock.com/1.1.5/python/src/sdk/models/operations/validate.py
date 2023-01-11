import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import testvalidate as shared_testvalidate


@dataclasses.dataclass
class ValidateQueryParams:
    id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    tag: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ValidateHeaders:
    user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'user-agent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateRequest:
    headers: ValidateHeaders = dataclasses.field()
    query_params: ValidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    test_validate: Optional[shared_testvalidate.TestValidate] = dataclasses.field(default=None)
    

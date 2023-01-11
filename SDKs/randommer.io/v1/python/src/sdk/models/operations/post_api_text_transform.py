import dataclasses
from typing import Optional
from enum import Enum
from ..shared import casetype_enum as shared_casetype_enum
from ..shared import textactiontype_enum as shared_textactiontype_enum
from ..shared import textdto as shared_textdto


@dataclasses.dataclass
class PostAPITextTransformQueryParams:
    text_action_type: shared_textactiontype_enum.TextActionTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'textActionType', 'style': 'form', 'explode': True }})
    case_type: Optional[shared_casetype_enum.CaseTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'caseType', 'style': 'form', 'explode': True }})
    find: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    replace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'replace', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAPITextTransformHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAPITextTransformRequests:
    text_dto: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    text_dto1: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_dto2: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    text_dto3: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostAPITextTransformRequest:
    headers: PostAPITextTransformHeaders = dataclasses.field()
    query_params: PostAPITextTransformQueryParams = dataclasses.field()
    request: PostAPITextTransformRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostAPITextTransformResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

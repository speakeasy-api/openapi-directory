import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import structureresponseone as shared_structureresponseone


@dataclasses.dataclass
class GetSingleStructureStructuresEntryIDGetPathParams:
    entry_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'entry_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSingleStructureStructuresEntryIDGetQueryParams:
    api_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_hint', 'style': 'form', 'explode': True }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    response_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_fields', 'style': 'form', 'explode': True }})
    response_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSingleStructureStructuresEntryIDGetRequest:
    path_params: GetSingleStructureStructuresEntryIDGetPathParams = dataclasses.field()
    query_params: GetSingleStructureStructuresEntryIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSingleStructureStructuresEntryIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    structure_response_one: Optional[shared_structureresponseone.StructureResponseOne] = dataclasses.field(default=None)
    

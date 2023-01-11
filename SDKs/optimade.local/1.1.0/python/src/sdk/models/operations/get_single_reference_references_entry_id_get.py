import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import referenceresponseone as shared_referenceresponseone


@dataclasses.dataclass
class GetSingleReferenceReferencesEntryIDGetPathParams:
    entry_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'entry_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSingleReferenceReferencesEntryIDGetQueryParams:
    api_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_hint', 'style': 'form', 'explode': True }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    response_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_fields', 'style': 'form', 'explode': True }})
    response_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSingleReferenceReferencesEntryIDGetRequest:
    path_params: GetSingleReferenceReferencesEntryIDGetPathParams = dataclasses.field()
    query_params: GetSingleReferenceReferencesEntryIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSingleReferenceReferencesEntryIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    reference_response_one: Optional[shared_referenceresponseone.ReferenceResponseOne] = dataclasses.field(default=None)
    

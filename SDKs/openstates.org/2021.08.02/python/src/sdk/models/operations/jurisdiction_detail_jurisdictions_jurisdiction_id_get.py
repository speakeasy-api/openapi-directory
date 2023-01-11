import dataclasses
from typing import Optional
from enum import Enum
from ..shared import jurisdictioninclude_enum as shared_jurisdictioninclude_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import jurisdiction as shared_jurisdiction


@dataclasses.dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams:
    jurisdiction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jurisdiction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_jurisdictioninclude_enum.JurisdictionIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetRequest:
    headers: JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders = dataclasses.field()
    path_params: JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams = dataclasses.field()
    query_params: JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    jurisdiction: Optional[shared_jurisdiction.Jurisdiction] = dataclasses.field(default=None)
    

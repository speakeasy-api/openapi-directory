import dataclasses
from typing import Optional
from enum import Enum
from ..shared import jurisdictionclassification_enum as shared_jurisdictionclassification_enum
from ..shared import jurisdictioninclude_enum as shared_jurisdictioninclude_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import jurisdictionlist as shared_jurisdictionlist


@dataclasses.dataclass
class JurisdictionListJurisdictionsGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    classification: Optional[shared_jurisdictionclassification_enum.JurisdictionClassificationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_jurisdictioninclude_enum.JurisdictionIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class JurisdictionListJurisdictionsGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JurisdictionListJurisdictionsGetRequest:
    headers: JurisdictionListJurisdictionsGetHeaders = dataclasses.field()
    query_params: JurisdictionListJurisdictionsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class JurisdictionListJurisdictionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    jurisdiction_list: Optional[shared_jurisdictionlist.JurisdictionList] = dataclasses.field(default=None)
    

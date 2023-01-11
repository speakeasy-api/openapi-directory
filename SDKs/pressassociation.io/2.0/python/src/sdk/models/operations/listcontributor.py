import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListContributorQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    updated_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListContributorSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListContributorRequest:
    query_params: ListContributorQueryParams = dataclasses.field()
    security: ListContributorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListContributorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_contributor_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

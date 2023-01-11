import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import billinclude_enum as shared_billinclude_enum
from ..shared import billlist as shared_billlist
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class BillsSearchBillsGetQueryParams:
    action_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action_since', 'style': 'form', 'explode': True }})
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    chamber: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chamber', 'style': 'form', 'explode': True }})
    classification: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    created_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_since', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_billinclude_enum.BillIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    session: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'session', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sponsor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sponsor', 'style': 'form', 'explode': True }})
    sponsor_classification: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sponsor_classification', 'style': 'form', 'explode': True }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    updated_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated_since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BillsSearchBillsGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillsSearchBillsGetRequest:
    headers: BillsSearchBillsGetHeaders = dataclasses.field()
    query_params: BillsSearchBillsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BillsSearchBillsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bill_list: Optional[shared_billlist.BillList] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    

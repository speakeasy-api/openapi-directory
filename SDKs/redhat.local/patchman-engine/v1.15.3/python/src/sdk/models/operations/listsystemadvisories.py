import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import controllers_systemadvisoriesresponse as shared_controllers_systemadvisoriesresponse


@dataclasses.dataclass
class ListSystemAdvisoriesPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    
class ListSystemAdvisoriesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    TYPE = "type"
    SYNOPSIS = "synopsis"
    PUBLIC_DATE = "public_date"


@dataclasses.dataclass
class ListSystemAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListSystemAdvisoriesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSystemAdvisoriesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListSystemAdvisoriesRequest:
    path_params: ListSystemAdvisoriesPathParams = dataclasses.field()
    query_params: ListSystemAdvisoriesQueryParams = dataclasses.field()
    security: ListSystemAdvisoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListSystemAdvisoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_system_advisories_response: Optional[shared_controllers_systemadvisoriesresponse.ControllersSystemAdvisoriesResponse] = dataclasses.field(default=None)
    

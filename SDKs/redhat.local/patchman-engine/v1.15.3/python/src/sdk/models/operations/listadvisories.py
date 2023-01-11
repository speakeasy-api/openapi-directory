import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import controllers_advisoriesresponse as shared_controllers_advisoriesresponse

class ListAdvisoriesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    ADVISORY_TYPE = "advisory_type"
    SYNOPSIS = "synopsis"
    PUBLIC_DATE = "public_date"
    APPLICABLE_SYSTEMS = "applicable_systems"


@dataclasses.dataclass
class ListAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_applicable_systems_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[applicable_systems]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListAdvisoriesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAdvisoriesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListAdvisoriesRequest:
    query_params: ListAdvisoriesQueryParams = dataclasses.field()
    security: ListAdvisoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListAdvisoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_advisories_response: Optional[shared_controllers_advisoriesresponse.ControllersAdvisoriesResponse] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systemadvisoriesdblookup as shared_controllers_systemadvisoriesdblookup


@dataclasses.dataclass
class ExportSystemAdvisoriesPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportSystemAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportSystemAdvisoriesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportSystemAdvisoriesRequest:
    path_params: ExportSystemAdvisoriesPathParams = dataclasses.field()
    query_params: ExportSystemAdvisoriesQueryParams = dataclasses.field()
    security: ExportSystemAdvisoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportSystemAdvisoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    controllers_system_advisories_db_lookups: Optional[list[shared_controllers_systemadvisoriesdblookup.ControllersSystemAdvisoriesDbLookup]] = dataclasses.field(default=None)
    

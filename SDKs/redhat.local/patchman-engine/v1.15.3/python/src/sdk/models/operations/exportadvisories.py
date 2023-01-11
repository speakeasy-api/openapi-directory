import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_advisoryinlineitem as shared_controllers_advisoryinlineitem


@dataclasses.dataclass
class ExportAdvisoriesQueryParams:
    filter_advisory_type_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[advisory_type]', 'style': 'form', 'explode': True }})
    filter_applicable_systems_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[applicable_systems]', 'style': 'form', 'explode': True }})
    filter_description_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_id_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[id]', 'style': 'form', 'explode': True }})
    filter_public_date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[public_date]', 'style': 'form', 'explode': True }})
    filter_severity_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[severity]', 'style': 'form', 'explode': True }})
    filter_synopsis_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[synopsis]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAdvisoriesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportAdvisoriesRequest:
    query_params: ExportAdvisoriesQueryParams = dataclasses.field()
    security: ExportAdvisoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAdvisoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    controllers_advisory_inline_items: Optional[list[shared_controllers_advisoryinlineitem.ControllersAdvisoryInlineItem]] = dataclasses.field(default=None)
    

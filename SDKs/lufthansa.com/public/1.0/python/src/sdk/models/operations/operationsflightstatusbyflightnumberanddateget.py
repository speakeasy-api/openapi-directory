import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..operations import security as operations_security


@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    flight_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetRequest:
    headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders = dataclasses.field()
    path_params: OperationsFlightstatusByFlightNumberAndDateGetPathParams = dataclasses.field()
    query_params: OperationsFlightstatusByFlightNumberAndDateGetQueryParams = dataclasses.field()
    security: OperationsFlightstatusByFlightNumberAndDateGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OperationsFlightstatusByFlightNumberAndDateGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operations_flightstatus_by_flight_number_and_date_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

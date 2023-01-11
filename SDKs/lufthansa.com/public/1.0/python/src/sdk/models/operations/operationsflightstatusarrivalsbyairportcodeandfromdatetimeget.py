import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..operations import security as operations_security


@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams:
    airport_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    from_date_time: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest:
    headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders = dataclasses.field()
    path_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams = dataclasses.field()
    query_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams = dataclasses.field()
    security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

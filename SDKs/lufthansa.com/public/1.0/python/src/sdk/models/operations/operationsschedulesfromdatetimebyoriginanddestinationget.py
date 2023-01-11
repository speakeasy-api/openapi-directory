import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..operations import security as operations_security


@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams:
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date_time: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams:
    direct_flights: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'directFlights', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest:
    headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = dataclasses.field()
    path_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = dataclasses.field()
    query_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = dataclasses.field()
    security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operations_schedules_from_date_time_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

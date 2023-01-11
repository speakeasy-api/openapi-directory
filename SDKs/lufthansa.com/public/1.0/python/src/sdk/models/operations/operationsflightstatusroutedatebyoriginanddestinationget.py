import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..operations import security as operations_security


@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest:
    headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders = dataclasses.field()
    path_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams = dataclasses.field()
    query_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams = dataclasses.field()
    security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operations_flightstatus_route_date_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

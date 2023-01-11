import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams:
    cabin_class: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cabinClass', 'style': 'simple', 'explode': False }})
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    flight_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest:
    headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders = dataclasses.field()
    path_params: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams = dataclasses.field()
    security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

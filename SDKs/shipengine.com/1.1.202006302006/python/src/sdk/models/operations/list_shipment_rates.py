import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_shipment_rates_response_body as shared_list_shipment_rates_response_body


@dataclasses.dataclass
class ListShipmentRatesPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListShipmentRatesQueryParams:
    created_at_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListShipmentRatesRequest:
    path_params: ListShipmentRatesPathParams = dataclasses.field()
    query_params: ListShipmentRatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListShipmentRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_shipment_rates_response_body: Optional[shared_list_shipment_rates_response_body.ListShipmentRatesResponseBody] = dataclasses.field(default=None)
    

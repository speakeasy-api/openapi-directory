import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum(str, Enum):
    FAN = "FAN"
    FCO = "FCO"
    FCP = "FCP"
    FDG = "FDG"
    FTF = "FTF"
    FUN = "FUN"
    FWN = "FWN"
    YCO = "YCO"
    YCP = "YCP"
    YDG = "YDG"
    YNB = "YNB"
    YNZ = "YNZ"
    YTF = "YTF"
    YUN = "YUN"
    ZXB = "ZXB"
    ZXF = "ZXF"
    ZXR = "ZXR"


@dataclasses.dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams:
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fromDate', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    product_code: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'productCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest:
    headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = dataclasses.field()
    path_params: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = dataclasses.field()
    security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

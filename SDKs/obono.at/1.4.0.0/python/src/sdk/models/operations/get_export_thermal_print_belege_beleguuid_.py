import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetExportThermalPrintBelegeBelegUUIDPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    
class GetExportThermalPrintBelegeBelegUUIDDialectEnum(str, Enum):
    ESCPOS = "escpos"
    ESCPOSLITE = "escposlite"
    STAR = "star"
    TEXT = "text"

class GetExportThermalPrintBelegeBelegUUIDEncodingEnum(str, Enum):
    RAW = "raw"
    BASE64 = "base64"


@dataclasses.dataclass
class GetExportThermalPrintBelegeBelegUUIDQueryParams:
    dialect: Optional[GetExportThermalPrintBelegeBelegUUIDDialectEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dialect', 'style': 'form', 'explode': True }})
    encoding: Optional[GetExportThermalPrintBelegeBelegUUIDEncodingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'encoding', 'style': 'form', 'explode': True }})
    qr: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'qr', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExportThermalPrintBelegeBelegUUIDRequest:
    path_params: GetExportThermalPrintBelegeBelegUUIDPathParams = dataclasses.field()
    query_params: GetExportThermalPrintBelegeBelegUUIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportThermalPrintBelegeBelegUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

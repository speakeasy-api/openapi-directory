import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class ExportTransactionsCsvv4IncludeEnum(str, Enum):
    PAYOR_ONLY = "payorOnly"
    PAYOR_AND_DESCENDANTS = "payorAndDescendants"


@dataclasses.dataclass
class ExportTransactionsCsvv4QueryParams:
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    include: Optional[ExportTransactionsCsvv4IncludeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportTransactionsCsvv4Request:
    query_params: ExportTransactionsCsvv4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportTransactionsCsvv4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    

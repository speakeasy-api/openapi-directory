import dataclasses
from typing import Optional
from enum import Enum

class GetValuesForVariablesFormatEnum(str, Enum):
    GOOGLE = "google"


@dataclasses.dataclass
class GetValuesForVariablesQueryParams:
    variable: str = dataclasses.field(metadata={'query_param': { 'field_name': 'variable', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    describe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'describe', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    forecast: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forecast', 'style': 'form', 'explode': True }})
    format: Optional[GetValuesForVariablesFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetValuesForVariablesHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetValuesForVariablesRequest:
    headers: GetValuesForVariablesHeaders = dataclasses.field()
    query_params: GetValuesForVariablesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetValuesForVariablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

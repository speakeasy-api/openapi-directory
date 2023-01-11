import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetRetiredObjectDiffUsingGetPathParams:
    date_from_yyyymmdd: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dateFromYYYYMMDD', 'style': 'simple', 'explode': False }})
    date_to_yyyymmdd: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dateToYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRetiredObjectDiffUsingGetRequest:
    path_params: GetRetiredObjectDiffUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRetiredObjectDiffUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    

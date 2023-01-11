import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetProteinInteractionCountUsingGetPathParams:
    date_yyyymmdd: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dateYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProteinInteractionCountUsingGetRequest:
    path_params: GetProteinInteractionCountUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProteinInteractionCountUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    

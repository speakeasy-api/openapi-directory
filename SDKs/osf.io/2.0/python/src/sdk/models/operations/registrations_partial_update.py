import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class RegistrationsPartialUpdatePathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsPartialUpdateRequest:
    path_params: RegistrationsPartialUpdatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

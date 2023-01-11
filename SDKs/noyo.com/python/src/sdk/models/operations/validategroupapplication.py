import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import applicationvalidationresult as shared_applicationvalidationresult


@dataclasses.dataclass
class ValidateGroupApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateGroupApplicationRequest:
    path_params: ValidateGroupApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ValidateGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_validation_result: Optional[shared_applicationvalidationresult.ApplicationValidationResult] = dataclasses.field(default=None)
    

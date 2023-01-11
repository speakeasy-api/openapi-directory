import dataclasses
from typing import Optional
from ..shared import applicationvalidationresult as shared_applicationvalidationresult
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclasses.dataclass
class SubmitGroupApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubmitGroupApplicationRequest:
    path_params: SubmitGroupApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SubmitGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_validation_result: Optional[shared_applicationvalidationresult.ApplicationValidationResult] = dataclasses.field(default=None)
    group_application_result: Optional[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(default=None)
    

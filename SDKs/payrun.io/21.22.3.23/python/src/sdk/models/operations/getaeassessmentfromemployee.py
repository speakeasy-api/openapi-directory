import dataclasses
from typing import Optional
from ..shared import aeassessment as shared_aeassessment
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetAeAssessmentFromEmployeePathParams:
    ae_assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AEAssessmentId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAeAssessmentFromEmployeeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAeAssessmentFromEmployeeRequest:
    headers: GetAeAssessmentFromEmployeeHeaders = dataclasses.field()
    path_params: GetAeAssessmentFromEmployeePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAeAssessmentFromEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ae_assessment: Optional[shared_aeassessment.AeAssessment] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    

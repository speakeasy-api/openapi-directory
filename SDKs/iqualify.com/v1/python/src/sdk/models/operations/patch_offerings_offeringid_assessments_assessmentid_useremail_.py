import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody:
    due_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequest:
    path_params: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams = dataclasses.field()
    request: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

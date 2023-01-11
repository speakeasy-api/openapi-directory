import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDRequest:
    path_params: DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

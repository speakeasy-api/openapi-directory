package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}
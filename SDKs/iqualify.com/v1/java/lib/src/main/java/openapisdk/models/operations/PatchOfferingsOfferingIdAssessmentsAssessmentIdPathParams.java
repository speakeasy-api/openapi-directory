package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}
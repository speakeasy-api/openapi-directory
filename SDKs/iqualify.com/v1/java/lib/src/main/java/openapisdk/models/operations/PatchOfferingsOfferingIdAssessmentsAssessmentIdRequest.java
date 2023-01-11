package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest {
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams pathParams;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest withPathParams(PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Assessment request;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest withRequest(openapisdk.models.shared.Assessment request) {
        this.request = request;
        return this;
    }
}
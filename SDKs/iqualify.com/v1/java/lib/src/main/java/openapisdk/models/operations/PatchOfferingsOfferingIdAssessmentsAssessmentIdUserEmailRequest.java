package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest {
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams pathParams;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest withPathParams(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody request;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest withRequest(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody request) {
        this.request = request;
        return this;
    }
}
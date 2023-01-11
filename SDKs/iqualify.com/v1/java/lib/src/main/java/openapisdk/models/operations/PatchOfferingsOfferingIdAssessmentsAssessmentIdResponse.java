package openapisdk.models.operations;



public class PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse {
    public openapisdk.models.shared.AssessmentResponse assessmentResponse;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse withAssessmentResponse(openapisdk.models.shared.AssessmentResponse assessmentResponse) {
        this.assessmentResponse = assessmentResponse;
        return this;
    }
    public String contentType;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetOfferingsOfferingIdAssessmentsResponse {
    public openapisdk.models.shared.AssessmentResponse[] assessmentResponses;
    public GetOfferingsOfferingIdAssessmentsResponse withAssessmentResponses(openapisdk.models.shared.AssessmentResponse[] assessmentResponses) {
        this.assessmentResponses = assessmentResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAssessmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAssessmentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAssessmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] submissionMarkResponses;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse withSubmissionMarkResponses(Object[] submissionMarkResponses) {
        this.submissionMarkResponses = submissionMarkResponses;
        return this;
    }
}
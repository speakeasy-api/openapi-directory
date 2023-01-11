package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] submissionMarkResponses;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse withSubmissionMarkResponses(Object[] submissionMarkResponses) {
        this.submissionMarkResponses = submissionMarkResponses;
        return this;
    }
}
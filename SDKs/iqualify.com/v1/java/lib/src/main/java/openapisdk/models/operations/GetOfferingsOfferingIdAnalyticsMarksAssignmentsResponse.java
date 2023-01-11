package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse {
    public openapisdk.models.shared.AssignmentMarkResponse[] assignmentMarkResponses;
    public GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse withAssignmentMarkResponses(openapisdk.models.shared.AssignmentMarkResponse[] assignmentMarkResponses) {
        this.assignmentMarkResponses = assignmentMarkResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
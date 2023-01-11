package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse {
    public openapisdk.models.shared.AssignmentMarkResponse[] assignmentMarkResponses;
    public GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse withAssignmentMarkResponses(openapisdk.models.shared.AssignmentMarkResponse[] assignmentMarkResponses) {
        this.assignmentMarkResponses = assignmentMarkResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
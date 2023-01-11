package openapisdk.models.operations;



public class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse {
    public openapisdk.models.shared.Assignments[] assignments;
    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withAssignments(openapisdk.models.shared.Assignments[] assignments) {
        this.assignments = assignments;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
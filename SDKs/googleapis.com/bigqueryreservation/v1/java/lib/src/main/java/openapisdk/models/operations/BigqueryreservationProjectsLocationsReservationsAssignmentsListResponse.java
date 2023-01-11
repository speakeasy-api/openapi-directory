package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssignmentsResponse listAssignmentsResponse;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse withListAssignmentsResponse(openapisdk.models.shared.ListAssignmentsResponse listAssignmentsResponse) {
        this.listAssignmentsResponse = listAssignmentsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
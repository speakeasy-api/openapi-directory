package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchAllAssignmentsResponse searchAllAssignmentsResponse;
    public BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse withSearchAllAssignmentsResponse(openapisdk.models.shared.SearchAllAssignmentsResponse searchAllAssignmentsResponse) {
        this.searchAllAssignmentsResponse = searchAllAssignmentsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
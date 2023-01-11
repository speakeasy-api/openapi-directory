package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsSearchAssignmentsResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsSearchAssignmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchAssignmentsResponse searchAssignmentsResponse;
    public BigqueryreservationProjectsLocationsSearchAssignmentsResponse withSearchAssignmentsResponse(openapisdk.models.shared.SearchAssignmentsResponse searchAssignmentsResponse) {
        this.searchAssignmentsResponse = searchAssignmentsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsSearchAssignmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
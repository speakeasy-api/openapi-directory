package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse {
    public openapisdk.models.shared.Assignment assignment;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
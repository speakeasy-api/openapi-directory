package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse {
    public openapisdk.models.shared.Assignment assignment;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse withAssignment(openapisdk.models.shared.Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
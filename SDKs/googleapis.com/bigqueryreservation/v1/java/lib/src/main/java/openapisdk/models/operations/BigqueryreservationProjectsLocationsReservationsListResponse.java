package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsListResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReservationsResponse listReservationsResponse;
    public BigqueryreservationProjectsLocationsReservationsListResponse withListReservationsResponse(openapisdk.models.shared.ListReservationsResponse listReservationsResponse) {
        this.listReservationsResponse = listReservationsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
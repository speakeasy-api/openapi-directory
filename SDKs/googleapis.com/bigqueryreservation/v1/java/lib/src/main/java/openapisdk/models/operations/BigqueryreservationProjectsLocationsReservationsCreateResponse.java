package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsCreateResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reservation reservation;
    public BigqueryreservationProjectsLocationsReservationsCreateResponse withReservation(openapisdk.models.shared.Reservation reservation) {
        this.reservation = reservation;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsReservationsGetResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsReservationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reservation reservation;
    public BigqueryreservationProjectsLocationsReservationsGetResponse withReservation(openapisdk.models.shared.Reservation reservation) {
        this.reservation = reservation;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsReservationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
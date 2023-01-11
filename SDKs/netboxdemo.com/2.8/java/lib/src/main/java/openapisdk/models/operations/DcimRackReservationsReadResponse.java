package openapisdk.models.operations;



public class DcimRackReservationsReadResponse {
    public String contentType;
    public DcimRackReservationsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackReservation rackReservation;
    public DcimRackReservationsReadResponse withRackReservation(openapisdk.models.shared.RackReservation rackReservation) {
        this.rackReservation = rackReservation;
        return this;
    }
    public Long statusCode;
    public DcimRackReservationsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
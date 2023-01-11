package openapisdk.models.operations;



public class DcimRackReservationsCreateResponse {
    public String contentType;
    public DcimRackReservationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackReservation rackReservation;
    public DcimRackReservationsCreateResponse withRackReservation(openapisdk.models.shared.RackReservation rackReservation) {
        this.rackReservation = rackReservation;
        return this;
    }
    public Long statusCode;
    public DcimRackReservationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
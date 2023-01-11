package openapisdk.models.operations;



public class DcimRackReservationsUpdateResponse {
    public String contentType;
    public DcimRackReservationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackReservation rackReservation;
    public DcimRackReservationsUpdateResponse withRackReservation(openapisdk.models.shared.RackReservation rackReservation) {
        this.rackReservation = rackReservation;
        return this;
    }
    public Long statusCode;
    public DcimRackReservationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
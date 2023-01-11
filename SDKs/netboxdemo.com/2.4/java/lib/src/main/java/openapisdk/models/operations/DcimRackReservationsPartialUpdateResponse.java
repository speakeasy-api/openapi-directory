package openapisdk.models.operations;



public class DcimRackReservationsPartialUpdateResponse {
    public String contentType;
    public DcimRackReservationsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackReservation rackReservation;
    public DcimRackReservationsPartialUpdateResponse withRackReservation(openapisdk.models.shared.RackReservation rackReservation) {
        this.rackReservation = rackReservation;
        return this;
    }
    public Long statusCode;
    public DcimRackReservationsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimRackReservationsListResponse {
    public String contentType;
    public DcimRackReservationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRackReservationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRackReservationsList200ApplicationJson dcimRackReservationsList200ApplicationJSONObject;
    public DcimRackReservationsListResponse withDcimRackReservationsList200ApplicationJsonObject(DcimRackReservationsList200ApplicationJson dcimRackReservationsList200ApplicationJSONObject) {
        this.dcimRackReservationsList200ApplicationJSONObject = dcimRackReservationsList200ApplicationJSONObject;
        return this;
    }
}
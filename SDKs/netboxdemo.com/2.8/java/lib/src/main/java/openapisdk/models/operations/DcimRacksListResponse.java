package openapisdk.models.operations;



public class DcimRacksListResponse {
    public String contentType;
    public DcimRacksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRacksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRacksList200ApplicationJson dcimRacksList200ApplicationJSONObject;
    public DcimRacksListResponse withDcimRacksList200ApplicationJsonObject(DcimRacksList200ApplicationJson dcimRacksList200ApplicationJSONObject) {
        this.dcimRacksList200ApplicationJSONObject = dcimRacksList200ApplicationJSONObject;
        return this;
    }
}
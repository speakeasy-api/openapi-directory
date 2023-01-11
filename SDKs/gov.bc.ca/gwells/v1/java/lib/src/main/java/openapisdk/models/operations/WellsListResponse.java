package openapisdk.models.operations;



public class WellsListResponse {
    public String contentType;
    public WellsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WellsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WellsList200ApplicationJson wellsList200ApplicationJSONObject;
    public WellsListResponse withWellsList200ApplicationJsonObject(WellsList200ApplicationJson wellsList200ApplicationJSONObject) {
        this.wellsList200ApplicationJSONObject = wellsList200ApplicationJSONObject;
        return this;
    }
}
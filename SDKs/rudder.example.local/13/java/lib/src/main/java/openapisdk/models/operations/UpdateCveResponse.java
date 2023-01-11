package openapisdk.models.operations;



public class UpdateCveResponse {
    public String contentType;
    public UpdateCveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateCve200ApplicationJson updateCVE200ApplicationJSONObject;
    public UpdateCveResponse withUpdateCve200ApplicationJsonObject(UpdateCve200ApplicationJson updateCVE200ApplicationJSONObject) {
        this.updateCVE200ApplicationJSONObject = updateCVE200ApplicationJSONObject;
        return this;
    }
}
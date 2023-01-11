package openapisdk.models.operations;



public class UpdateNodeResponse {
    public String contentType;
    public UpdateNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateNode200ApplicationJson updateNode200ApplicationJSONObject;
    public UpdateNodeResponse withUpdateNode200ApplicationJsonObject(UpdateNode200ApplicationJson updateNode200ApplicationJSONObject) {
        this.updateNode200ApplicationJSONObject = updateNode200ApplicationJSONObject;
        return this;
    }
}
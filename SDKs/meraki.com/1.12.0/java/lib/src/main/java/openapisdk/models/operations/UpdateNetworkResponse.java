package openapisdk.models.operations;



public class UpdateNetworkResponse {
    public String contentType;
    public UpdateNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateNetwork200ApplicationJSONObject;
    public UpdateNetworkResponse withUpdateNetwork200ApplicationJsonObject(java.util.Map<String, Object> updateNetwork200ApplicationJSONObject) {
        this.updateNetwork200ApplicationJSONObject = updateNetwork200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class UnbindNetworkResponse {
    public String contentType;
    public UnbindNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnbindNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> unbindNetwork200ApplicationJSONObject;
    public UnbindNetworkResponse withUnbindNetwork200ApplicationJsonObject(java.util.Map<String, Object> unbindNetwork200ApplicationJSONObject) {
        this.unbindNetwork200ApplicationJSONObject = unbindNetwork200ApplicationJSONObject;
        return this;
    }
}
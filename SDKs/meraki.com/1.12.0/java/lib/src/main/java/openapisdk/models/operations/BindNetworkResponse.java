package openapisdk.models.operations;



public class BindNetworkResponse {
    public String contentType;
    public BindNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BindNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> bindNetwork200ApplicationJSONObject;
    public BindNetworkResponse withBindNetwork200ApplicationJsonObject(java.util.Map<String, Object> bindNetwork200ApplicationJSONObject) {
        this.bindNetwork200ApplicationJSONObject = bindNetwork200ApplicationJSONObject;
        return this;
    }
}
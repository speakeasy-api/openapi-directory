package openapisdk.models.operations;



public class GetNetworkClientResponse {
    public String contentType;
    public GetNetworkClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClient200ApplicationJSONObject;
    public GetNetworkClientResponse withGetNetworkClient200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClient200ApplicationJSONObject) {
        this.getNetworkClient200ApplicationJSONObject = getNetworkClient200ApplicationJSONObject;
        return this;
    }
}
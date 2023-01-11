package openapisdk.models.operations;



public class GetNetworkClientPolicyResponse {
    public String contentType;
    public GetNetworkClientPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClientPolicy200ApplicationJSONObject;
    public GetNetworkClientPolicyResponse withGetNetworkClientPolicy200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClientPolicy200ApplicationJSONObject) {
        this.getNetworkClientPolicy200ApplicationJSONObject = getNetworkClientPolicy200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class GetNetworkSwitchAccessPolicyResponse {
    public String contentType;
    public GetNetworkSwitchAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchAccessPolicy200ApplicationJSONObject;
    public GetNetworkSwitchAccessPolicyResponse withGetNetworkSwitchAccessPolicy200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchAccessPolicy200ApplicationJSONObject) {
        this.getNetworkSwitchAccessPolicy200ApplicationJSONObject = getNetworkSwitchAccessPolicy200ApplicationJSONObject;
        return this;
    }
}
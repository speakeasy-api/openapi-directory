package openapisdk.models.operations;



public class GetNetworkSwitchAccessPoliciesResponse {
    public String contentType;
    public GetNetworkSwitchAccessPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchAccessPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchAccessPolicies200ApplicationJSONObject;
    public GetNetworkSwitchAccessPoliciesResponse withGetNetworkSwitchAccessPolicies200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchAccessPolicies200ApplicationJSONObject) {
        this.getNetworkSwitchAccessPolicies200ApplicationJSONObject = getNetworkSwitchAccessPolicies200ApplicationJSONObject;
        return this;
    }
}
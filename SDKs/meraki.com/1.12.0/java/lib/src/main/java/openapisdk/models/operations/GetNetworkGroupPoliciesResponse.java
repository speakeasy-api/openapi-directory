package openapisdk.models.operations;



public class GetNetworkGroupPoliciesResponse {
    public String contentType;
    public GetNetworkGroupPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkGroupPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkGroupPolicies200ApplicationJSONObject;
    public GetNetworkGroupPoliciesResponse withGetNetworkGroupPolicies200ApplicationJsonObject(java.util.Map<String, Object> getNetworkGroupPolicies200ApplicationJSONObject) {
        this.getNetworkGroupPolicies200ApplicationJSONObject = getNetworkGroupPolicies200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class GetNetworkGroupPolicyResponse {
    public String contentType;
    public GetNetworkGroupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkGroupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkGroupPolicy200ApplicationJSONObject;
    public GetNetworkGroupPolicyResponse withGetNetworkGroupPolicy200ApplicationJsonObject(java.util.Map<String, Object> getNetworkGroupPolicy200ApplicationJSONObject) {
        this.getNetworkGroupPolicy200ApplicationJSONObject = getNetworkGroupPolicy200ApplicationJSONObject;
        return this;
    }
}
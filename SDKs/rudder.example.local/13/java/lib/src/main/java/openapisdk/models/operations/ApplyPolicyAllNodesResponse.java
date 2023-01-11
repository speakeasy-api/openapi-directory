package openapisdk.models.operations;



public class ApplyPolicyAllNodesResponse {
    public String contentType;
    public ApplyPolicyAllNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApplyPolicyAllNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ApplyPolicyAllNodes200ApplicationJson applyPolicyAllNodes200ApplicationJSONObject;
    public ApplyPolicyAllNodesResponse withApplyPolicyAllNodes200ApplicationJsonObject(ApplyPolicyAllNodes200ApplicationJson applyPolicyAllNodes200ApplicationJSONObject) {
        this.applyPolicyAllNodes200ApplicationJSONObject = applyPolicyAllNodes200ApplicationJSONObject;
        return this;
    }
}
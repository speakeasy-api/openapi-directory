package openapisdk.models.operations;



public class UpdatePoliciesResponse {
    public String contentType;
    public UpdatePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdatePolicies200ApplicationJson updatePolicies200ApplicationJSONObject;
    public UpdatePoliciesResponse withUpdatePolicies200ApplicationJsonObject(UpdatePolicies200ApplicationJson updatePolicies200ApplicationJSONObject) {
        this.updatePolicies200ApplicationJSONObject = updatePolicies200ApplicationJSONObject;
        return this;
    }
}
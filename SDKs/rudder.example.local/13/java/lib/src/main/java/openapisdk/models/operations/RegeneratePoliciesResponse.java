package openapisdk.models.operations;



public class RegeneratePoliciesResponse {
    public String contentType;
    public RegeneratePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegeneratePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RegeneratePolicies200ApplicationJson regeneratePolicies200ApplicationJSONObject;
    public RegeneratePoliciesResponse withRegeneratePolicies200ApplicationJsonObject(RegeneratePolicies200ApplicationJson regeneratePolicies200ApplicationJSONObject) {
        this.regeneratePolicies200ApplicationJSONObject = regeneratePolicies200ApplicationJSONObject;
        return this;
    }
}
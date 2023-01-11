package openapisdk.models.operations;



public class GetOrganizationBrandingPoliciesResponse {
    public String contentType;
    public GetOrganizationBrandingPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationBrandingPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationBrandingPolicies200ApplicationJSONObject;
    public GetOrganizationBrandingPoliciesResponse withGetOrganizationBrandingPolicies200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationBrandingPolicies200ApplicationJSONObject) {
        this.getOrganizationBrandingPolicies200ApplicationJSONObject = getOrganizationBrandingPolicies200ApplicationJSONObject;
        return this;
    }
}
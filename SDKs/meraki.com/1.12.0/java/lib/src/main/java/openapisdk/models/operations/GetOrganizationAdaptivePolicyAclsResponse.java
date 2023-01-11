package openapisdk.models.operations;



public class GetOrganizationAdaptivePolicyAclsResponse {
    public String contentType;
    public GetOrganizationAdaptivePolicyAclsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationAdaptivePolicyAclsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationAdaptivePolicyAcls200ApplicationJSONObject;
    public GetOrganizationAdaptivePolicyAclsResponse withGetOrganizationAdaptivePolicyAcls200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationAdaptivePolicyAcls200ApplicationJSONObject) {
        this.getOrganizationAdaptivePolicyAcls200ApplicationJSONObject = getOrganizationAdaptivePolicyAcls200ApplicationJSONObject;
        return this;
    }
}
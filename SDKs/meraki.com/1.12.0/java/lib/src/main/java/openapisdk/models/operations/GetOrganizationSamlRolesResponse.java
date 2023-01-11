package openapisdk.models.operations;



public class GetOrganizationSamlRolesResponse {
    public String contentType;
    public GetOrganizationSamlRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSamlRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSamlRoles200ApplicationJSONObject;
    public GetOrganizationSamlRolesResponse withGetOrganizationSamlRoles200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSamlRoles200ApplicationJSONObject) {
        this.getOrganizationSamlRoles200ApplicationJSONObject = getOrganizationSamlRoles200ApplicationJSONObject;
        return this;
    }
}
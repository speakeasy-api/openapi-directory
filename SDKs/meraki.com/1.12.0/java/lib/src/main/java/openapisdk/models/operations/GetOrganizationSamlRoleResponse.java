package openapisdk.models.operations;



public class GetOrganizationSamlRoleResponse {
    public String contentType;
    public GetOrganizationSamlRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSamlRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSamlRole200ApplicationJSONObject;
    public GetOrganizationSamlRoleResponse withGetOrganizationSamlRole200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSamlRole200ApplicationJSONObject) {
        this.getOrganizationSamlRole200ApplicationJSONObject = getOrganizationSamlRole200ApplicationJSONObject;
        return this;
    }
}
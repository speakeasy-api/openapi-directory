package openapisdk.models.operations;



public class GetOrganizationSamlIdpResponse {
    public String contentType;
    public GetOrganizationSamlIdpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSamlIdpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSamlIdp200ApplicationJSONObject;
    public GetOrganizationSamlIdpResponse withGetOrganizationSamlIdp200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSamlIdp200ApplicationJSONObject) {
        this.getOrganizationSamlIdp200ApplicationJSONObject = getOrganizationSamlIdp200ApplicationJSONObject;
        return this;
    }
}
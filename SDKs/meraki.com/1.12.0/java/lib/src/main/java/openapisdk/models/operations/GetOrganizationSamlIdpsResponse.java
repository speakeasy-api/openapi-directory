package openapisdk.models.operations;



public class GetOrganizationSamlIdpsResponse {
    public String contentType;
    public GetOrganizationSamlIdpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSamlIdpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSamlIdps200ApplicationJSONObject;
    public GetOrganizationSamlIdpsResponse withGetOrganizationSamlIdps200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSamlIdps200ApplicationJSONObject) {
        this.getOrganizationSamlIdps200ApplicationJSONObject = getOrganizationSamlIdps200ApplicationJSONObject;
        return this;
    }
}
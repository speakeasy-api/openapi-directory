package openapisdk.models.operations;



public class GetOrganizationSamlResponse {
    public String contentType;
    public GetOrganizationSamlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSamlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSaml200ApplicationJSONObject;
    public GetOrganizationSamlResponse withGetOrganizationSaml200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSaml200ApplicationJSONObject) {
        this.getOrganizationSaml200ApplicationJSONObject = getOrganizationSaml200ApplicationJSONObject;
        return this;
    }
}
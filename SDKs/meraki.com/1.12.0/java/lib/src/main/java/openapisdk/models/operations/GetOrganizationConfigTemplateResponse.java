package openapisdk.models.operations;



public class GetOrganizationConfigTemplateResponse {
    public String contentType;
    public GetOrganizationConfigTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationConfigTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationConfigTemplate200ApplicationJSONObject;
    public GetOrganizationConfigTemplateResponse withGetOrganizationConfigTemplate200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationConfigTemplate200ApplicationJSONObject) {
        this.getOrganizationConfigTemplate200ApplicationJSONObject = getOrganizationConfigTemplate200ApplicationJSONObject;
        return this;
    }
}
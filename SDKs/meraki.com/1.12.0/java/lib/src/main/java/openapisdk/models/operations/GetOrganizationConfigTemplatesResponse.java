package openapisdk.models.operations;



public class GetOrganizationConfigTemplatesResponse {
    public String contentType;
    public GetOrganizationConfigTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationConfigTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationConfigTemplates200ApplicationJSONObject;
    public GetOrganizationConfigTemplatesResponse withGetOrganizationConfigTemplates200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationConfigTemplates200ApplicationJSONObject) {
        this.getOrganizationConfigTemplates200ApplicationJSONObject = getOrganizationConfigTemplates200ApplicationJSONObject;
        return this;
    }
}
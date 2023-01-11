package openapisdk.models.operations;



public class GetOrganizationConfigurationChangesResponse {
    public String contentType;
    public GetOrganizationConfigurationChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationConfigurationChangesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationConfigurationChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationConfigurationChanges200ApplicationJSONObject;
    public GetOrganizationConfigurationChangesResponse withGetOrganizationConfigurationChanges200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationConfigurationChanges200ApplicationJSONObject) {
        this.getOrganizationConfigurationChanges200ApplicationJSONObject = getOrganizationConfigurationChanges200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class GetOrganizationLoginSecurityResponse {
    public String contentType;
    public GetOrganizationLoginSecurityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationLoginSecurityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationLoginSecurity200ApplicationJSONObject;
    public GetOrganizationLoginSecurityResponse withGetOrganizationLoginSecurity200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationLoginSecurity200ApplicationJSONObject) {
        this.getOrganizationLoginSecurity200ApplicationJSONObject = getOrganizationLoginSecurity200ApplicationJSONObject;
        return this;
    }
}
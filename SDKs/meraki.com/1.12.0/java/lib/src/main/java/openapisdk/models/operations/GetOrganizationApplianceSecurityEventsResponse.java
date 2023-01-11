package openapisdk.models.operations;



public class GetOrganizationApplianceSecurityEventsResponse {
    public String contentType;
    public GetOrganizationApplianceSecurityEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationApplianceSecurityEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApplianceSecurityEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApplianceSecurityEvents200ApplicationJSONObject;
    public GetOrganizationApplianceSecurityEventsResponse withGetOrganizationApplianceSecurityEvents200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApplianceSecurityEvents200ApplicationJSONObject) {
        this.getOrganizationApplianceSecurityEvents200ApplicationJSONObject = getOrganizationApplianceSecurityEvents200ApplicationJSONObject;
        return this;
    }
}
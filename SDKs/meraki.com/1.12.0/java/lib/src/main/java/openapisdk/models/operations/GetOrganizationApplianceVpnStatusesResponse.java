package openapisdk.models.operations;



public class GetOrganizationApplianceVpnStatusesResponse {
    public String contentType;
    public GetOrganizationApplianceVpnStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationApplianceVpnStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApplianceVpnStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApplianceVpnStatuses200ApplicationJSONObject;
    public GetOrganizationApplianceVpnStatusesResponse withGetOrganizationApplianceVpnStatuses200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApplianceVpnStatuses200ApplicationJSONObject) {
        this.getOrganizationApplianceVpnStatuses200ApplicationJSONObject = getOrganizationApplianceVpnStatuses200ApplicationJSONObject;
        return this;
    }
}
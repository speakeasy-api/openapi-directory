package openapisdk.models.operations;



public class GetOrganizationApplianceVpnStatsResponse {
    public String contentType;
    public GetOrganizationApplianceVpnStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationApplianceVpnStatsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApplianceVpnStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApplianceVpnStats200ApplicationJSONObject;
    public GetOrganizationApplianceVpnStatsResponse withGetOrganizationApplianceVpnStats200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApplianceVpnStats200ApplicationJSONObject) {
        this.getOrganizationApplianceVpnStats200ApplicationJSONObject = getOrganizationApplianceVpnStats200ApplicationJSONObject;
        return this;
    }
}
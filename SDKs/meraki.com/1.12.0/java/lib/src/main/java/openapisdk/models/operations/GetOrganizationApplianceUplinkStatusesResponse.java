package openapisdk.models.operations;



public class GetOrganizationApplianceUplinkStatusesResponse {
    public String contentType;
    public GetOrganizationApplianceUplinkStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationApplianceUplinkStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApplianceUplinkStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApplianceUplinkStatuses200ApplicationJSONObject;
    public GetOrganizationApplianceUplinkStatusesResponse withGetOrganizationApplianceUplinkStatuses200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApplianceUplinkStatuses200ApplicationJSONObject) {
        this.getOrganizationApplianceUplinkStatuses200ApplicationJSONObject = getOrganizationApplianceUplinkStatuses200ApplicationJSONObject;
        return this;
    }
}
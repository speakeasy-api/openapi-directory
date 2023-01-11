package openapisdk.models.operations;



public class GetNetworkApplianceClientSecurityEventsResponse {
    public String contentType;
    public GetNetworkApplianceClientSecurityEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkApplianceClientSecurityEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkApplianceClientSecurityEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkApplianceClientSecurityEvents200ApplicationJSONObject;
    public GetNetworkApplianceClientSecurityEventsResponse withGetNetworkApplianceClientSecurityEvents200ApplicationJsonObject(java.util.Map<String, Object> getNetworkApplianceClientSecurityEvents200ApplicationJSONObject) {
        this.getNetworkApplianceClientSecurityEvents200ApplicationJSONObject = getNetworkApplianceClientSecurityEvents200ApplicationJSONObject;
        return this;
    }
}
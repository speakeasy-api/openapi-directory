package openapisdk.models.operations;



public class GetNetworkApplianceSecurityEventsResponse {
    public String contentType;
    public GetNetworkApplianceSecurityEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkApplianceSecurityEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkApplianceSecurityEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkApplianceSecurityEvents200ApplicationJSONObject;
    public GetNetworkApplianceSecurityEventsResponse withGetNetworkApplianceSecurityEvents200ApplicationJsonObject(java.util.Map<String, Object> getNetworkApplianceSecurityEvents200ApplicationJSONObject) {
        this.getNetworkApplianceSecurityEvents200ApplicationJSONObject = getNetworkApplianceSecurityEvents200ApplicationJSONObject;
        return this;
    }
}
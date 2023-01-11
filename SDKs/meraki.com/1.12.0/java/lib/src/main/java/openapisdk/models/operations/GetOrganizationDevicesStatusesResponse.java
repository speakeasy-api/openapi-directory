package openapisdk.models.operations;



public class GetOrganizationDevicesStatusesResponse {
    public String contentType;
    public GetOrganizationDevicesStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationDevicesStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationDevicesStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationDevicesStatuses200ApplicationJSONObject;
    public GetOrganizationDevicesStatusesResponse withGetOrganizationDevicesStatuses200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationDevicesStatuses200ApplicationJSONObject) {
        this.getOrganizationDevicesStatuses200ApplicationJSONObject = getOrganizationDevicesStatuses200ApplicationJSONObject;
        return this;
    }
}
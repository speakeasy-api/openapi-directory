package openapisdk.models.operations;



public class GetOrganizationDevicesResponse {
    public String contentType;
    public GetOrganizationDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationDevicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationDevices200ApplicationJSONObject;
    public GetOrganizationDevicesResponse withGetOrganizationDevices200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationDevices200ApplicationJSONObject) {
        this.getOrganizationDevices200ApplicationJSONObject = getOrganizationDevices200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class GetOrganizationInventoryDevicesResponse {
    public String contentType;
    public GetOrganizationInventoryDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationInventoryDevicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationInventoryDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationInventoryDevices200ApplicationJSONObject;
    public GetOrganizationInventoryDevicesResponse withGetOrganizationInventoryDevices200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationInventoryDevices200ApplicationJSONObject) {
        this.getOrganizationInventoryDevices200ApplicationJSONObject = getOrganizationInventoryDevices200ApplicationJSONObject;
        return this;
    }
}
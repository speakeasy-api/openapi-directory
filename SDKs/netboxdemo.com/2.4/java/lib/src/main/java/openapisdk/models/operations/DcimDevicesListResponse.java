package openapisdk.models.operations;



public class DcimDevicesListResponse {
    public String contentType;
    public DcimDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimDevicesList200ApplicationJson dcimDevicesList200ApplicationJSONObject;
    public DcimDevicesListResponse withDcimDevicesList200ApplicationJsonObject(DcimDevicesList200ApplicationJson dcimDevicesList200ApplicationJSONObject) {
        this.dcimDevicesList200ApplicationJSONObject = dcimDevicesList200ApplicationJSONObject;
        return this;
    }
}
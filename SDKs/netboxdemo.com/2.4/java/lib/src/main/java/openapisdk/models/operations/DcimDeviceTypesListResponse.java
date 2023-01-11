package openapisdk.models.operations;



public class DcimDeviceTypesListResponse {
    public String contentType;
    public DcimDeviceTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimDeviceTypesList200ApplicationJson dcimDeviceTypesList200ApplicationJSONObject;
    public DcimDeviceTypesListResponse withDcimDeviceTypesList200ApplicationJsonObject(DcimDeviceTypesList200ApplicationJson dcimDeviceTypesList200ApplicationJSONObject) {
        this.dcimDeviceTypesList200ApplicationJSONObject = dcimDeviceTypesList200ApplicationJSONObject;
        return this;
    }
}
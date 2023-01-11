package openapisdk.models.operations;



public class DcimDeviceRolesListResponse {
    public String contentType;
    public DcimDeviceRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimDeviceRolesList200ApplicationJson dcimDeviceRolesList200ApplicationJSONObject;
    public DcimDeviceRolesListResponse withDcimDeviceRolesList200ApplicationJsonObject(DcimDeviceRolesList200ApplicationJson dcimDeviceRolesList200ApplicationJSONObject) {
        this.dcimDeviceRolesList200ApplicationJSONObject = dcimDeviceRolesList200ApplicationJSONObject;
        return this;
    }
}
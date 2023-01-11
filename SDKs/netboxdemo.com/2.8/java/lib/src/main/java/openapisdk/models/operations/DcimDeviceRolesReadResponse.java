package openapisdk.models.operations;



public class DcimDeviceRolesReadResponse {
    public String contentType;
    public DcimDeviceRolesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceRole deviceRole;
    public DcimDeviceRolesReadResponse withDeviceRole(openapisdk.models.shared.DeviceRole deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    public Long statusCode;
    public DcimDeviceRolesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
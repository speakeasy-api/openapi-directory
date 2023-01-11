package openapisdk.models.operations;



public class DcimDeviceRolesCreateResponse {
    public String contentType;
    public DcimDeviceRolesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceRole deviceRole;
    public DcimDeviceRolesCreateResponse withDeviceRole(openapisdk.models.shared.DeviceRole deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    public Long statusCode;
    public DcimDeviceRolesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
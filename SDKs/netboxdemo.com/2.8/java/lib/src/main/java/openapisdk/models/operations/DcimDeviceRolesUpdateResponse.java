package openapisdk.models.operations;



public class DcimDeviceRolesUpdateResponse {
    public String contentType;
    public DcimDeviceRolesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceRole deviceRole;
    public DcimDeviceRolesUpdateResponse withDeviceRole(openapisdk.models.shared.DeviceRole deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    public Long statusCode;
    public DcimDeviceRolesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
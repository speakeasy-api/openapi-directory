package openapisdk.models.operations;



public class DcimDeviceRolesPartialUpdateResponse {
    public String contentType;
    public DcimDeviceRolesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceRole deviceRole;
    public DcimDeviceRolesPartialUpdateResponse withDeviceRole(openapisdk.models.shared.DeviceRole deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    public Long statusCode;
    public DcimDeviceRolesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
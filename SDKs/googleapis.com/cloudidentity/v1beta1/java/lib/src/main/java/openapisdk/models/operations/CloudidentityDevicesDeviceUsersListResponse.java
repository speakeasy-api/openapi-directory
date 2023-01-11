package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersListResponse {
    public String contentType;
    public CloudidentityDevicesDeviceUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceUsersResponse listDeviceUsersResponse;
    public CloudidentityDevicesDeviceUsersListResponse withListDeviceUsersResponse(openapisdk.models.shared.ListDeviceUsersResponse listDeviceUsersResponse) {
        this.listDeviceUsersResponse = listDeviceUsersResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesDeviceUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
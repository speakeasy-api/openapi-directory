package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersListResponse {
    public String contentType;
    public CloudidentityDevicesDeviceUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse googleAppsCloudidentityDevicesV1ListDeviceUsersResponse;
    public CloudidentityDevicesDeviceUsersListResponse withGoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse(openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse googleAppsCloudidentityDevicesV1ListDeviceUsersResponse) {
        this.googleAppsCloudidentityDevicesV1ListDeviceUsersResponse = googleAppsCloudidentityDevicesV1ListDeviceUsersResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesDeviceUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
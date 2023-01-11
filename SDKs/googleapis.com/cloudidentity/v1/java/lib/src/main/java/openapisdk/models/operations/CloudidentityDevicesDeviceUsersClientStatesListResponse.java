package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersClientStatesListResponse {
    public String contentType;
    public CloudidentityDevicesDeviceUsersClientStatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse googleAppsCloudidentityDevicesV1ListClientStatesResponse;
    public CloudidentityDevicesDeviceUsersClientStatesListResponse withGoogleAppsCloudidentityDevicesV1ListClientStatesResponse(openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse googleAppsCloudidentityDevicesV1ListClientStatesResponse) {
        this.googleAppsCloudidentityDevicesV1ListClientStatesResponse = googleAppsCloudidentityDevicesV1ListClientStatesResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesDeviceUsersClientStatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
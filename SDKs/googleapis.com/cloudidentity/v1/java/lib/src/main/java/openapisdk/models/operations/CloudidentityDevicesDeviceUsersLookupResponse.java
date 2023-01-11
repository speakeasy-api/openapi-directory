package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersLookupResponse {
    public String contentType;
    public CloudidentityDevicesDeviceUsersLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse;
    public CloudidentityDevicesDeviceUsersLookupResponse withGoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse(openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse) {
        this.googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse = googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesDeviceUsersLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
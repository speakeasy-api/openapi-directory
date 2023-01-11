package openapisdk.models.operations;



public class CloudidentityDevicesListResponse {
    public String contentType;
    public CloudidentityDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListDevicesResponse googleAppsCloudidentityDevicesV1ListDevicesResponse;
    public CloudidentityDevicesListResponse withGoogleAppsCloudidentityDevicesV1ListDevicesResponse(openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1ListDevicesResponse googleAppsCloudidentityDevicesV1ListDevicesResponse) {
        this.googleAppsCloudidentityDevicesV1ListDevicesResponse = googleAppsCloudidentityDevicesV1ListDevicesResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
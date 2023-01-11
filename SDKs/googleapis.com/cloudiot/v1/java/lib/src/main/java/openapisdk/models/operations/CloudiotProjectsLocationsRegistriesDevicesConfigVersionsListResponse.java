package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceConfigVersionsResponse listDeviceConfigVersionsResponse;
    public CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse withListDeviceConfigVersionsResponse(openapisdk.models.shared.ListDeviceConfigVersionsResponse listDeviceConfigVersionsResponse) {
        this.listDeviceConfigVersionsResponse = listDeviceConfigVersionsResponse;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
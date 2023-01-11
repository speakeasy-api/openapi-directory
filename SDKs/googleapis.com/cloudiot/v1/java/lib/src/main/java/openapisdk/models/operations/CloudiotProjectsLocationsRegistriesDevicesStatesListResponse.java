package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesStatesListResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesStatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceStatesResponse listDeviceStatesResponse;
    public CloudiotProjectsLocationsRegistriesDevicesStatesListResponse withListDeviceStatesResponse(openapisdk.models.shared.ListDeviceStatesResponse listDeviceStatesResponse) {
        this.listDeviceStatesResponse = listDeviceStatesResponse;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesStatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
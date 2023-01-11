package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesCreateResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public CloudiotProjectsLocationsRegistriesDevicesCreateResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
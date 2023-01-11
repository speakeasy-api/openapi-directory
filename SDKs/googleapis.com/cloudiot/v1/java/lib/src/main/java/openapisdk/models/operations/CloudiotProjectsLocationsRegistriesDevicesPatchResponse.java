package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesPatchResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public CloudiotProjectsLocationsRegistriesDevicesPatchResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesGetResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public CloudiotProjectsLocationsRegistriesDevicesGetResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
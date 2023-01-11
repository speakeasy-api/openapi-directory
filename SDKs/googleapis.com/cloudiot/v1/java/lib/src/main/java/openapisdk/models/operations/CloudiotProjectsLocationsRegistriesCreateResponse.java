package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesCreateResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceRegistry deviceRegistry;
    public CloudiotProjectsLocationsRegistriesCreateResponse withDeviceRegistry(openapisdk.models.shared.DeviceRegistry deviceRegistry) {
        this.deviceRegistry = deviceRegistry;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
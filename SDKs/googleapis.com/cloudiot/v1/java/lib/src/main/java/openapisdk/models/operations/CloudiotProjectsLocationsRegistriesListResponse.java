package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesListResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceRegistriesResponse listDeviceRegistriesResponse;
    public CloudiotProjectsLocationsRegistriesListResponse withListDeviceRegistriesResponse(openapisdk.models.shared.ListDeviceRegistriesResponse listDeviceRegistriesResponse) {
        this.listDeviceRegistriesResponse = listDeviceRegistriesResponse;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDevicesResponse listDevicesResponse;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse withListDevicesResponse(openapisdk.models.shared.ListDevicesResponse listDevicesResponse) {
        this.listDevicesResponse = listDevicesResponse;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsServiceBindingsListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsServiceBindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServiceBindingsResponse listServiceBindingsResponse;
    public NetworkservicesProjectsLocationsServiceBindingsListResponse withListServiceBindingsResponse(openapisdk.models.shared.ListServiceBindingsResponse listServiceBindingsResponse) {
        this.listServiceBindingsResponse = listServiceBindingsResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsServiceBindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
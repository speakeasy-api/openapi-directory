package openapisdk.models.operations;



public class IdsProjectsLocationsEndpointsListResponse {
    public String contentType;
    public IdsProjectsLocationsEndpointsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse;
    public IdsProjectsLocationsEndpointsListResponse withListEndpointsResponse(openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse) {
        this.listEndpointsResponse = listEndpointsResponse;
        return this;
    }
    public Long statusCode;
    public IdsProjectsLocationsEndpointsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
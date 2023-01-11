package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse withListEndpointsResponse(openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse) {
        this.listEndpointsResponse = listEndpointsResponse;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
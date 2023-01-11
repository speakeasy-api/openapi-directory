package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Endpoint endpoint;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse withEndpoint(openapisdk.models.shared.Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
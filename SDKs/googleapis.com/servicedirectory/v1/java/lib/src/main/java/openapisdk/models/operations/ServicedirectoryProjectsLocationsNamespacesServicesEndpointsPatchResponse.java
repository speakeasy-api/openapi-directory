package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Endpoint endpoint;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse withEndpoint(openapisdk.models.shared.Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResolveServiceResponse resolveServiceResponse;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse withResolveServiceResponse(openapisdk.models.shared.ResolveServiceResponse resolveServiceResponse) {
        this.resolveServiceResponse = resolveServiceResponse;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
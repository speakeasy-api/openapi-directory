package openapisdk.models.operations;



public class RunNamespacesServicesCreateResponse {
    public String contentType;
    public RunNamespacesServicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public RunNamespacesServicesCreateResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public RunNamespacesServicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
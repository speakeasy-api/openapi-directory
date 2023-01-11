package openapisdk.models.operations;



public class RunNamespacesServicesGetResponse {
    public String contentType;
    public RunNamespacesServicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public RunNamespacesServicesGetResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public RunNamespacesServicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
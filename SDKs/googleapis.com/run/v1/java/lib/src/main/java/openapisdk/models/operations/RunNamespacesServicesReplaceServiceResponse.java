package openapisdk.models.operations;



public class RunNamespacesServicesReplaceServiceResponse {
    public String contentType;
    public RunNamespacesServicesReplaceServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public RunNamespacesServicesReplaceServiceResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public RunNamespacesServicesReplaceServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
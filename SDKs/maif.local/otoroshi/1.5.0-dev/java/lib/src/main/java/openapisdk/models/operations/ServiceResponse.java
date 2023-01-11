package openapisdk.models.operations;



public class ServiceResponse {
    public String contentType;
    public ServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public ServiceResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public ServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
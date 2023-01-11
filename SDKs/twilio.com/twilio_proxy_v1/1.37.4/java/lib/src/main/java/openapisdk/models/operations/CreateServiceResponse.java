package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1Service proxyV1Service;
    public CreateServiceResponse withProxyV1Service(openapisdk.models.shared.ProxyV1Service proxyV1Service) {
        this.proxyV1Service = proxyV1Service;
        return this;
    }
}
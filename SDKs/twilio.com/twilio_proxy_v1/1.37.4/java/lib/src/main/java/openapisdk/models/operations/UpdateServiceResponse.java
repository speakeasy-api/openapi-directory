package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1Service proxyV1Service;
    public UpdateServiceResponse withProxyV1Service(openapisdk.models.shared.ProxyV1Service proxyV1Service) {
        this.proxyV1Service = proxyV1Service;
        return this;
    }
}
package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1Service proxyV1Service;
    public FetchServiceResponse withProxyV1Service(openapisdk.models.shared.ProxyV1Service proxyV1Service) {
        this.proxyV1Service = proxyV1Service;
        return this;
    }
}
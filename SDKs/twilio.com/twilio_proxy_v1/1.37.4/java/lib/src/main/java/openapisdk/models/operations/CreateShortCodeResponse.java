package openapisdk.models.operations;



public class CreateShortCodeResponse {
    public String contentType;
    public CreateShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode;
    public CreateShortCodeResponse withProxyV1ServiceShortCode(openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode) {
        this.proxyV1ServiceShortCode = proxyV1ServiceShortCode;
        return this;
    }
}
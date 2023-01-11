package openapisdk.models.operations;



public class FetchShortCodeResponse {
    public String contentType;
    public FetchShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode;
    public FetchShortCodeResponse withProxyV1ServiceShortCode(openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode) {
        this.proxyV1ServiceShortCode = proxyV1ServiceShortCode;
        return this;
    }
}
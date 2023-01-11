package openapisdk.models.operations;



public class UpdateShortCodeResponse {
    public String contentType;
    public UpdateShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode;
    public UpdateShortCodeResponse withProxyV1ServiceShortCode(openapisdk.models.shared.ProxyV1ServiceShortCode proxyV1ServiceShortCode) {
        this.proxyV1ServiceShortCode = proxyV1ServiceShortCode;
        return this;
    }
}
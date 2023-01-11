package openapisdk.models.operations;



public class FetchSessionResponse {
    public String contentType;
    public FetchSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession;
    public FetchSessionResponse withProxyV1ServiceSession(openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession) {
        this.proxyV1ServiceSession = proxyV1ServiceSession;
        return this;
    }
}
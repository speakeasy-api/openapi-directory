package openapisdk.models.operations;



public class CreateSessionResponse {
    public String contentType;
    public CreateSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession;
    public CreateSessionResponse withProxyV1ServiceSession(openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession) {
        this.proxyV1ServiceSession = proxyV1ServiceSession;
        return this;
    }
}
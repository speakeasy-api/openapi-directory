package openapisdk.models.operations;



public class UpdateSessionResponse {
    public String contentType;
    public UpdateSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession;
    public UpdateSessionResponse withProxyV1ServiceSession(openapisdk.models.shared.ProxyV1ServiceSession proxyV1ServiceSession) {
        this.proxyV1ServiceSession = proxyV1ServiceSession;
        return this;
    }
}
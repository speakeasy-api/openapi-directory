package openapisdk.models.operations;



public class FetchInteractionResponse {
    public String contentType;
    public FetchInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSessionInteraction proxyV1ServiceSessionInteraction;
    public FetchInteractionResponse withProxyV1ServiceSessionInteraction(openapisdk.models.shared.ProxyV1ServiceSessionInteraction proxyV1ServiceSessionInteraction) {
        this.proxyV1ServiceSessionInteraction = proxyV1ServiceSessionInteraction;
        return this;
    }
}
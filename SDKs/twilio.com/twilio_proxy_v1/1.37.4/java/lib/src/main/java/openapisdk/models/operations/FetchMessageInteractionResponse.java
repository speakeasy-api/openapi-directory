package openapisdk.models.operations;



public class FetchMessageInteractionResponse {
    public String contentType;
    public FetchMessageInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessageInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction;
    public FetchMessageInteractionResponse withProxyV1ServiceSessionParticipantMessageInteraction(openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction) {
        this.proxyV1ServiceSessionParticipantMessageInteraction = proxyV1ServiceSessionParticipantMessageInteraction;
        return this;
    }
}
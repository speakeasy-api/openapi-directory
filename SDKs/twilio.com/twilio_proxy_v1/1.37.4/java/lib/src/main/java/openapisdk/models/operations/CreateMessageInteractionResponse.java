package openapisdk.models.operations;



public class CreateMessageInteractionResponse {
    public String contentType;
    public CreateMessageInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessageInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction;
    public CreateMessageInteractionResponse withProxyV1ServiceSessionParticipantMessageInteraction(openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction) {
        this.proxyV1ServiceSessionParticipantMessageInteraction = proxyV1ServiceSessionParticipantMessageInteraction;
        return this;
    }
}
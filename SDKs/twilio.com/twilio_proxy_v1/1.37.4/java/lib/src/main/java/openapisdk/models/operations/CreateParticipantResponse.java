package openapisdk.models.operations;



public class CreateParticipantResponse {
    public String contentType;
    public CreateParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipant proxyV1ServiceSessionParticipant;
    public CreateParticipantResponse withProxyV1ServiceSessionParticipant(openapisdk.models.shared.ProxyV1ServiceSessionParticipant proxyV1ServiceSessionParticipant) {
        this.proxyV1ServiceSessionParticipant = proxyV1ServiceSessionParticipant;
        return this;
    }
}
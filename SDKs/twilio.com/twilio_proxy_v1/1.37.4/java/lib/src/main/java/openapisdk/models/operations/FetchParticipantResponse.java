package openapisdk.models.operations;



public class FetchParticipantResponse {
    public String contentType;
    public FetchParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipant proxyV1ServiceSessionParticipant;
    public FetchParticipantResponse withProxyV1ServiceSessionParticipant(openapisdk.models.shared.ProxyV1ServiceSessionParticipant proxyV1ServiceSessionParticipant) {
        this.proxyV1ServiceSessionParticipant = proxyV1ServiceSessionParticipant;
        return this;
    }
}
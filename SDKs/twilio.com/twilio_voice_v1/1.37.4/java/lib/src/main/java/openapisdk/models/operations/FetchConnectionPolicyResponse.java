package openapisdk.models.operations;



public class FetchConnectionPolicyResponse {
    public String contentType;
    public FetchConnectionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConnectionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy;
    public FetchConnectionPolicyResponse withVoiceV1ConnectionPolicy(openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy) {
        this.voiceV1ConnectionPolicy = voiceV1ConnectionPolicy;
        return this;
    }
}
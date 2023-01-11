package openapisdk.models.operations;



public class CreateConnectionPolicyResponse {
    public String contentType;
    public CreateConnectionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConnectionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy;
    public CreateConnectionPolicyResponse withVoiceV1ConnectionPolicy(openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy) {
        this.voiceV1ConnectionPolicy = voiceV1ConnectionPolicy;
        return this;
    }
}
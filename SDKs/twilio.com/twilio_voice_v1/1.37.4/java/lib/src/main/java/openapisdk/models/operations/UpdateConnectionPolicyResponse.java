package openapisdk.models.operations;



public class UpdateConnectionPolicyResponse {
    public String contentType;
    public UpdateConnectionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConnectionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy;
    public UpdateConnectionPolicyResponse withVoiceV1ConnectionPolicy(openapisdk.models.shared.VoiceV1ConnectionPolicy voiceV1ConnectionPolicy) {
        this.voiceV1ConnectionPolicy = voiceV1ConnectionPolicy;
        return this;
    }
}
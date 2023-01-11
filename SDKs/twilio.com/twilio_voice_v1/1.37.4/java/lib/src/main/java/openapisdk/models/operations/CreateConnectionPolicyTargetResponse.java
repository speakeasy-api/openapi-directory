package openapisdk.models.operations;



public class CreateConnectionPolicyTargetResponse {
    public String contentType;
    public CreateConnectionPolicyTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConnectionPolicyTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget;
    public CreateConnectionPolicyTargetResponse withVoiceV1ConnectionPolicyConnectionPolicyTarget(openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget) {
        this.voiceV1ConnectionPolicyConnectionPolicyTarget = voiceV1ConnectionPolicyConnectionPolicyTarget;
        return this;
    }
}
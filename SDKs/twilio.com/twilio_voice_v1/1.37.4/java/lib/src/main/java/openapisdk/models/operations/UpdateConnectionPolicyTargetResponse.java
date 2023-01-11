package openapisdk.models.operations;



public class UpdateConnectionPolicyTargetResponse {
    public String contentType;
    public UpdateConnectionPolicyTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConnectionPolicyTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget;
    public UpdateConnectionPolicyTargetResponse withVoiceV1ConnectionPolicyConnectionPolicyTarget(openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget) {
        this.voiceV1ConnectionPolicyConnectionPolicyTarget = voiceV1ConnectionPolicyConnectionPolicyTarget;
        return this;
    }
}
package openapisdk.models.operations;



public class FetchConnectionPolicyTargetResponse {
    public String contentType;
    public FetchConnectionPolicyTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConnectionPolicyTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget;
    public FetchConnectionPolicyTargetResponse withVoiceV1ConnectionPolicyConnectionPolicyTarget(openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget voiceV1ConnectionPolicyConnectionPolicyTarget) {
        this.voiceV1ConnectionPolicyConnectionPolicyTarget = voiceV1ConnectionPolicyConnectionPolicyTarget;
        return this;
    }
}
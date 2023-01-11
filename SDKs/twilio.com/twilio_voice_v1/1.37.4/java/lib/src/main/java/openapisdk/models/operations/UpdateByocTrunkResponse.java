package openapisdk.models.operations;



public class UpdateByocTrunkResponse {
    public String contentType;
    public UpdateByocTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateByocTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk;
    public UpdateByocTrunkResponse withVoiceV1ByocTrunk(openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk) {
        this.voiceV1ByocTrunk = voiceV1ByocTrunk;
        return this;
    }
}
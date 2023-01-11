package openapisdk.models.operations;



public class CreateByocTrunkResponse {
    public String contentType;
    public CreateByocTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateByocTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk;
    public CreateByocTrunkResponse withVoiceV1ByocTrunk(openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk) {
        this.voiceV1ByocTrunk = voiceV1ByocTrunk;
        return this;
    }
}
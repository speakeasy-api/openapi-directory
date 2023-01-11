package openapisdk.models.operations;



public class FetchByocTrunkResponse {
    public String contentType;
    public FetchByocTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchByocTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk;
    public FetchByocTrunkResponse withVoiceV1ByocTrunk(openapisdk.models.shared.VoiceV1ByocTrunk voiceV1ByocTrunk) {
        this.voiceV1ByocTrunk = voiceV1ByocTrunk;
        return this;
    }
}
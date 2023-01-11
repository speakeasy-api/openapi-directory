package openapisdk.models.operations;



public class FetchSourceIpMappingResponse {
    public String contentType;
    public FetchSourceIpMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSourceIpMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping;
    public FetchSourceIpMappingResponse withVoiceV1SourceIpMapping(openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping) {
        this.voiceV1SourceIpMapping = voiceV1SourceIpMapping;
        return this;
    }
}
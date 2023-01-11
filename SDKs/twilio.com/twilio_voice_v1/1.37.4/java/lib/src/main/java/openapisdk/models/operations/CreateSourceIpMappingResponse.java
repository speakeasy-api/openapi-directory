package openapisdk.models.operations;



public class CreateSourceIpMappingResponse {
    public String contentType;
    public CreateSourceIpMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSourceIpMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping;
    public CreateSourceIpMappingResponse withVoiceV1SourceIpMapping(openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping) {
        this.voiceV1SourceIpMapping = voiceV1SourceIpMapping;
        return this;
    }
}
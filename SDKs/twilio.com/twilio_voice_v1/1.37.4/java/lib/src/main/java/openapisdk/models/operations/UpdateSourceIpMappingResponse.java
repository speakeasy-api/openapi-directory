package openapisdk.models.operations;



public class UpdateSourceIpMappingResponse {
    public String contentType;
    public UpdateSourceIpMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSourceIpMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping;
    public UpdateSourceIpMappingResponse withVoiceV1SourceIpMapping(openapisdk.models.shared.VoiceV1SourceIpMapping voiceV1SourceIpMapping) {
        this.voiceV1SourceIpMapping = voiceV1SourceIpMapping;
        return this;
    }
}
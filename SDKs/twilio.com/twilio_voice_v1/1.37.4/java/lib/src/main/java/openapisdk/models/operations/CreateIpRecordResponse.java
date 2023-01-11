package openapisdk.models.operations;



public class CreateIpRecordResponse {
    public String contentType;
    public CreateIpRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIpRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord;
    public CreateIpRecordResponse withVoiceV1IpRecord(openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord) {
        this.voiceV1IpRecord = voiceV1IpRecord;
        return this;
    }
}
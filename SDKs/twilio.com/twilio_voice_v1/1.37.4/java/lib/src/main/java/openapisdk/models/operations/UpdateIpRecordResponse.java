package openapisdk.models.operations;



public class UpdateIpRecordResponse {
    public String contentType;
    public UpdateIpRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateIpRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord;
    public UpdateIpRecordResponse withVoiceV1IpRecord(openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord) {
        this.voiceV1IpRecord = voiceV1IpRecord;
        return this;
    }
}
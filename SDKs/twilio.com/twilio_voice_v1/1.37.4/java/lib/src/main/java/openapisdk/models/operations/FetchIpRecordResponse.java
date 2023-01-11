package openapisdk.models.operations;



public class FetchIpRecordResponse {
    public String contentType;
    public FetchIpRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchIpRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord;
    public FetchIpRecordResponse withVoiceV1IpRecord(openapisdk.models.shared.VoiceV1IpRecord voiceV1IpRecord) {
        this.voiceV1IpRecord = voiceV1IpRecord;
        return this;
    }
}
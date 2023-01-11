package openapisdk.models.shared;


public enum CdnSettingsIngestionTypeEnum {
    RTMP("rtmp"),
    DASH("dash"),
    WEBRTC("webrtc"),
    HLS("hls");

    public final String value;

    private CdnSettingsIngestionTypeEnum(String value) {
        this.value = value;
    }
}

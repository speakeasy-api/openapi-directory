package openapisdk.models.shared;


public enum RecordingEnumCodecEnum {
    VP8("VP8"),
    H264("H264"),
    OPUS("OPUS"),
    PCMU("PCMU");

    public final String value;

    private RecordingEnumCodecEnum(String value) {
        this.value = value;
    }
}

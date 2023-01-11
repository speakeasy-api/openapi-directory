package openapisdk.models.shared;


public enum RoomRecordingEnumCodecEnum {
    VP8("VP8"),
    H264("H264"),
    OPUS("OPUS"),
    PCMU("PCMU");

    public final String value;

    private RoomRecordingEnumCodecEnum(String value) {
        this.value = value;
    }
}

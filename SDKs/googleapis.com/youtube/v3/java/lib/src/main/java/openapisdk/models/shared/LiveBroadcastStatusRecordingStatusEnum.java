package openapisdk.models.shared;


public enum LiveBroadcastStatusRecordingStatusEnum {
    LIVE_BROADCAST_RECORDING_STATUS_UNSPECIFIED("liveBroadcastRecordingStatusUnspecified"),
    NOT_RECORDING("notRecording"),
    RECORDING("recording"),
    RECORDED("recorded");

    public final String value;

    private LiveBroadcastStatusRecordingStatusEnum(String value) {
        this.value = value;
    }
}

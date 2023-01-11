package openapisdk.models.shared;


public enum LiveBroadcastContentDetailsLatencyPreferenceEnum {
    LATENCY_PREFERENCE_UNSPECIFIED("latencyPreferenceUnspecified"),
    NORMAL("normal"),
    LOW("low"),
    ULTRA_LOW("ultraLow");

    public final String value;

    private LiveBroadcastContentDetailsLatencyPreferenceEnum(String value) {
        this.value = value;
    }
}

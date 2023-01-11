package openapisdk.models.operations;


public enum GetNetworkWirelessLatencyHistoryAccessCategoryEnum {
    BACKGROUND_TRAFFIC("backgroundTraffic"),
    BEST_EFFORT_TRAFFIC("bestEffortTraffic"),
    VIDEO_TRAFFIC("videoTraffic"),
    VOICE_TRAFFIC("voiceTraffic");

    public final String value;

    private GetNetworkWirelessLatencyHistoryAccessCategoryEnum(String value) {
        this.value = value;
    }
}

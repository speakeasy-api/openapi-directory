package openapisdk.models.shared;


public enum LiveBroadcastStatusLifeCycleStatusEnum {
    LIFE_CYCLE_STATUS_UNSPECIFIED("lifeCycleStatusUnspecified"),
    CREATED("created"),
    READY("ready"),
    TESTING("testing"),
    LIVE("live"),
    COMPLETE("complete"),
    REVOKED("revoked"),
    TEST_STARTING("testStarting"),
    LIVE_STARTING("liveStarting");

    public final String value;

    private LiveBroadcastStatusLifeCycleStatusEnum(String value) {
        this.value = value;
    }
}

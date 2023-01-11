package openapisdk.models.shared;


public enum WatchStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private WatchStateEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum LocalPostStateEnum {
    LOCAL_POST_STATE_UNSPECIFIED("LOCAL_POST_STATE_UNSPECIFIED"),
    REJECTED("REJECTED"),
    LIVE("LIVE"),
    PROCESSING("PROCESSING");

    public final String value;

    private LocalPostStateEnum(String value) {
        this.value = value;
    }
}

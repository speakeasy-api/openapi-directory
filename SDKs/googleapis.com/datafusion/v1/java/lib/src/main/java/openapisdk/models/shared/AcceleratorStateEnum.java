package openapisdk.models.shared;


public enum AcceleratorStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private AcceleratorStateEnum(String value) {
        this.value = value;
    }
}

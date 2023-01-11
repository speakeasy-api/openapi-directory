package openapisdk.models.shared;


public enum FindingStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private FindingStateEnum(String value) {
        this.value = value;
    }
}

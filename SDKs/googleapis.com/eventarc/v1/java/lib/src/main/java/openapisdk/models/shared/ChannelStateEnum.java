package openapisdk.models.shared;


public enum ChannelStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private ChannelStateEnum(String value) {
        this.value = value;
    }
}

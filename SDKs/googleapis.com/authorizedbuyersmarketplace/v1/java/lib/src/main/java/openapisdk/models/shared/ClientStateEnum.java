package openapisdk.models.shared;


public enum ClientStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private ClientStateEnum(String value) {
        this.value = value;
    }
}

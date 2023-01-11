package openapisdk.models.shared;


public enum ClientUserStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    INVITED("INVITED"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private ClientUserStateEnum(String value) {
        this.value = value;
    }
}

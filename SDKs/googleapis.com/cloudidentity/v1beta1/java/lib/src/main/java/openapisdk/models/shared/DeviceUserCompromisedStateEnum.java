package openapisdk.models.shared;


public enum DeviceUserCompromisedStateEnum {
    COMPROMISED_STATE_UNSPECIFIED("COMPROMISED_STATE_UNSPECIFIED"),
    COMPROMISED("COMPROMISED"),
    NOT_COMPROMISED("NOT_COMPROMISED");

    public final String value;

    private DeviceUserCompromisedStateEnum(String value) {
        this.value = value;
    }
}

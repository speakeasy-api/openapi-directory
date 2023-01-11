package openapisdk.models.shared;


public enum DeviceCompromisedStateEnum {
    COMPROMISED_STATE_UNSPECIFIED("COMPROMISED_STATE_UNSPECIFIED"),
    COMPROMISED("COMPROMISED"),
    UNCOMPROMISED("UNCOMPROMISED");

    public final String value;

    private DeviceCompromisedStateEnum(String value) {
        this.value = value;
    }
}

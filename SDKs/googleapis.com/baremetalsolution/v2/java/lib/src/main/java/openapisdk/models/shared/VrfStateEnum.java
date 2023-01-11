package openapisdk.models.shared;


public enum VrfStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONING("PROVISIONING"),
    PROVISIONED("PROVISIONED");

    public final String value;

    private VrfStateEnum(String value) {
        this.value = value;
    }
}

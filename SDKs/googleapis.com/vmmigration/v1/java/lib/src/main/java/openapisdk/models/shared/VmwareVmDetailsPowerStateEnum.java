package openapisdk.models.shared;


public enum VmwareVmDetailsPowerStateEnum {
    POWER_STATE_UNSPECIFIED("POWER_STATE_UNSPECIFIED"),
    ON("ON"),
    OFF("OFF"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private VmwareVmDetailsPowerStateEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum AwsVmDetailsPowerStateEnum {
    POWER_STATE_UNSPECIFIED("POWER_STATE_UNSPECIFIED"),
    ON("ON"),
    OFF("OFF"),
    SUSPENDED("SUSPENDED"),
    PENDING("PENDING");

    public final String value;

    private AwsVmDetailsPowerStateEnum(String value) {
        this.value = value;
    }
}

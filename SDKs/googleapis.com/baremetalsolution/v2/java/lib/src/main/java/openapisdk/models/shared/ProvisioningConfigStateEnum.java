package openapisdk.models.shared;


public enum ProvisioningConfigStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    DRAFT("DRAFT"),
    SUBMITTED("SUBMITTED"),
    PROVISIONING("PROVISIONING"),
    PROVISIONED("PROVISIONED"),
    VALIDATED("VALIDATED"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED");

    public final String value;

    private ProvisioningConfigStateEnum(String value) {
        this.value = value;
    }
}

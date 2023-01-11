package openapisdk.models.shared;


public enum NetworkStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONING("PROVISIONING"),
    PROVISIONED("PROVISIONED"),
    DEPROVISIONING("DEPROVISIONING"),
    UPDATING("UPDATING");

    public final String value;

    private NetworkStateEnum(String value) {
        this.value = value;
    }
}

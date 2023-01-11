package openapisdk.models.shared;


public enum WritableCircuitStatusEnum {
    PLANNED("planned"),
    PROVISIONING("provisioning"),
    ACTIVE("active"),
    OFFLINE("offline"),
    DEPROVISIONING("deprovisioning"),
    DECOMMISSIONED("decommissioned");

    public final String value;

    private WritableCircuitStatusEnum(String value) {
        this.value = value;
    }
}

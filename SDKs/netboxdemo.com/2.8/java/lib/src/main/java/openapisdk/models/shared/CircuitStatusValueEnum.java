package openapisdk.models.shared;


public enum CircuitStatusValueEnum {
    PLANNED("planned"),
    PROVISIONING("provisioning"),
    ACTIVE("active"),
    OFFLINE("offline"),
    DEPROVISIONING("deprovisioning"),
    DECOMMISSIONED("decommissioned");

    public final String value;

    private CircuitStatusValueEnum(String value) {
        this.value = value;
    }
}

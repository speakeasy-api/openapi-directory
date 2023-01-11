package openapisdk.models.shared;


public enum CircuitStatusLabelEnum {
    PLANNED("Planned"),
    PROVISIONING("Provisioning"),
    ACTIVE("Active"),
    OFFLINE("Offline"),
    DEPROVISIONING("Deprovisioning"),
    DECOMMISSIONED("Decommissioned");

    public final String value;

    private CircuitStatusLabelEnum(String value) {
        this.value = value;
    }
}

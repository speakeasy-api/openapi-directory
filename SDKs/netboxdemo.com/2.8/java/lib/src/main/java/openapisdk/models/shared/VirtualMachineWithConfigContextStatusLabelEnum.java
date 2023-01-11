package openapisdk.models.shared;


public enum VirtualMachineWithConfigContextStatusLabelEnum {
    OFFLINE("Offline"),
    ACTIVE("Active"),
    PLANNED("Planned"),
    STAGED("Staged"),
    FAILED("Failed"),
    DECOMMISSIONING("Decommissioning");

    public final String value;

    private VirtualMachineWithConfigContextStatusLabelEnum(String value) {
        this.value = value;
    }
}

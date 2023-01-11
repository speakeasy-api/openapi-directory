package openapisdk.models.shared;


public enum VirtualMachineWithConfigContextStatusValueEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    STAGED("staged"),
    FAILED("failed"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private VirtualMachineWithConfigContextStatusValueEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum WritableVirtualMachineWithConfigContextStatusEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    STAGED("staged"),
    FAILED("failed"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private WritableVirtualMachineWithConfigContextStatusEnum(String value) {
        this.value = value;
    }
}

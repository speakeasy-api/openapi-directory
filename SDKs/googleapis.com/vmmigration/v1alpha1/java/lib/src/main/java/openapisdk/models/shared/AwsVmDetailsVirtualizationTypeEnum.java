package openapisdk.models.shared;


public enum AwsVmDetailsVirtualizationTypeEnum {
    VM_VIRTUALIZATION_TYPE_UNSPECIFIED("VM_VIRTUALIZATION_TYPE_UNSPECIFIED"),
    HVM("HVM"),
    PARAVIRTUAL("PARAVIRTUAL");

    public final String value;

    private AwsVmDetailsVirtualizationTypeEnum(String value) {
        this.value = value;
    }
}

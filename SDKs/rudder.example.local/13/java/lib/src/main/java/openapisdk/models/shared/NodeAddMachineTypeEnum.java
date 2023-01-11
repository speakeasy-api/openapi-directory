package openapisdk.models.shared;


public enum NodeAddMachineTypeEnum {
    VMWARE("vmware"),
    PHYSICAL("physical"),
    VM("vm"),
    SOLARISZONE("solariszone"),
    QEMU("qemu"),
    XEN("xen"),
    AIXLPAR("aixlpar"),
    HYPERV("hyperv"),
    BSDJAIL("bsdjail");

    public final String value;

    private NodeAddMachineTypeEnum(String value) {
        this.value = value;
    }
}

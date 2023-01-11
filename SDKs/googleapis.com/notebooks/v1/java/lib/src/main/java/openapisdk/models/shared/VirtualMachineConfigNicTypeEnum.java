package openapisdk.models.shared;


public enum VirtualMachineConfigNicTypeEnum {
    UNSPECIFIED_NIC_TYPE("UNSPECIFIED_NIC_TYPE"),
    VIRTIO_NET("VIRTIO_NET"),
    GVNIC("GVNIC");

    public final String value;

    private VirtualMachineConfigNicTypeEnum(String value) {
        this.value = value;
    }
}

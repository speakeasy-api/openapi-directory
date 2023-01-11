package openapisdk.models.shared;


public enum InstanceNicTypeEnum {
    UNSPECIFIED_NIC_TYPE("UNSPECIFIED_NIC_TYPE"),
    VIRTIO_NET("VIRTIO_NET"),
    GVNIC("GVNIC");

    public final String value;

    private InstanceNicTypeEnum(String value) {
        this.value = value;
    }
}

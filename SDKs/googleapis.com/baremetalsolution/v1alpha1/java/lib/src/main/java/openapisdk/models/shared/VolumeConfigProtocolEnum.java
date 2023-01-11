package openapisdk.models.shared;


public enum VolumeConfigProtocolEnum {
    PROTOCOL_UNSPECIFIED("PROTOCOL_UNSPECIFIED"),
    PROTOCOL_FC("PROTOCOL_FC"),
    PROTOCOL_NFS("PROTOCOL_NFS");

    public final String value;

    private VolumeConfigProtocolEnum(String value) {
        this.value = value;
    }
}

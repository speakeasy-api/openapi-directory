package openapisdk.models.shared;


public enum VolumeProtocolEnum {
    PROTOCOL_UNSPECIFIED("PROTOCOL_UNSPECIFIED"),
    FIBRE_CHANNEL("FIBRE_CHANNEL"),
    NFS("NFS");

    public final String value;

    private VolumeProtocolEnum(String value) {
        this.value = value;
    }
}

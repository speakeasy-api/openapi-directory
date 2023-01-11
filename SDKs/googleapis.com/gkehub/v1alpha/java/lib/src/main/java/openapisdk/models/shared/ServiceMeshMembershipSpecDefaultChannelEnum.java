package openapisdk.models.shared;


public enum ServiceMeshMembershipSpecDefaultChannelEnum {
    CHANNEL_UNSPECIFIED("CHANNEL_UNSPECIFIED"),
    RAPID("RAPID"),
    REGULAR("REGULAR"),
    STABLE("STABLE");

    public final String value;

    private ServiceMeshMembershipSpecDefaultChannelEnum(String value) {
        this.value = value;
    }
}

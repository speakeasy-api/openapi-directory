package openapisdk.models.shared;


public enum ClientStatusEnum {
    CLIENT_STATUS_UNSPECIFIED("CLIENT_STATUS_UNSPECIFIED"),
    DISABLED("DISABLED"),
    ACTIVE("ACTIVE");

    public final String value;

    private ClientStatusEnum(String value) {
        this.value = value;
    }
}

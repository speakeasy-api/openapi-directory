package openapisdk.models.shared;


public enum ClientUserStatusEnum {
    USER_STATUS_UNSPECIFIED("USER_STATUS_UNSPECIFIED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    DISABLED("DISABLED");

    public final String value;

    private ClientUserStatusEnum(String value) {
        this.value = value;
    }
}

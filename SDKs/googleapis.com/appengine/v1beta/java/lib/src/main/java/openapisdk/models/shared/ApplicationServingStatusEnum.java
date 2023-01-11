package openapisdk.models.shared;


public enum ApplicationServingStatusEnum {
    UNSPECIFIED("UNSPECIFIED"),
    SERVING("SERVING"),
    USER_DISABLED("USER_DISABLED"),
    SYSTEM_DISABLED("SYSTEM_DISABLED");

    public final String value;

    private ApplicationServingStatusEnum(String value) {
        this.value = value;
    }
}

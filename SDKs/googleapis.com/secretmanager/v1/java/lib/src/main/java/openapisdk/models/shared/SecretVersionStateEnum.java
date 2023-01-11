package openapisdk.models.shared;


public enum SecretVersionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DESTROYED("DESTROYED");

    public final String value;

    private SecretVersionStateEnum(String value) {
        this.value = value;
    }
}

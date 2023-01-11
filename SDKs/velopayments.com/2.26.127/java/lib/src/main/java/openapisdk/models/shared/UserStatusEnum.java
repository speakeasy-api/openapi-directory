package openapisdk.models.shared;


public enum UserStatusEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    PENDING("PENDING");

    public final String value;

    private UserStatusEnum(String value) {
        this.value = value;
    }
}

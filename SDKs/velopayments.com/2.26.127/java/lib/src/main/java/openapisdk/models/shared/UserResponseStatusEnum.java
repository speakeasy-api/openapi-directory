package openapisdk.models.shared;


public enum UserResponseStatusEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    PENDING("PENDING");

    public final String value;

    private UserResponseStatusEnum(String value) {
        this.value = value;
    }
}

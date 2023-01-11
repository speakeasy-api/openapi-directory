package openapisdk.models.operations;


public enum EditChannelRequestBodyPrivacyEnum {
    ANYBODY("anybody"),
    MODERATORS("moderators"),
    USERS("users");

    public final String value;

    private EditChannelRequestBodyPrivacyEnum(String value) {
        this.value = value;
    }
}

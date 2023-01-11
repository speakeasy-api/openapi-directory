package openapisdk.models.operations;


public enum CreateChannelRequestBodyPrivacyEnum {
    ANYBODY("anybody"),
    MODERATORS("moderators"),
    USER("user");

    public final String value;

    private CreateChannelRequestBodyPrivacyEnum(String value) {
        this.value = value;
    }
}

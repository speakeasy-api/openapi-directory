package openapisdk.models.operations;


public enum EditUserRequestBodyVideosPrivacyEmbedEnum {
    PRIVATE_("private"),
    PUBLIC_("public"),
    WHITELIST("whitelist");

    public final String value;

    private EditUserRequestBodyVideosPrivacyEmbedEnum(String value) {
        this.value = value;
    }
}

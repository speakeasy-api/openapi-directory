package openapisdk.models.operations;


public enum EditVideoRequestBodyPrivacyEmbedEnum {
    PRIVATE_("private"),
    PUBLIC_("public"),
    WHITELIST("whitelist");

    public final String value;

    private EditVideoRequestBodyPrivacyEmbedEnum(String value) {
        this.value = value;
    }
}

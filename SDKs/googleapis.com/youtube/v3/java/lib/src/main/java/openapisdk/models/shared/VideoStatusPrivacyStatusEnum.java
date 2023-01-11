package openapisdk.models.shared;


public enum VideoStatusPrivacyStatusEnum {
    PUBLIC_("public"),
    UNLISTED("unlisted"),
    PRIVATE_("private");

    public final String value;

    private VideoStatusPrivacyStatusEnum(String value) {
        this.value = value;
    }
}

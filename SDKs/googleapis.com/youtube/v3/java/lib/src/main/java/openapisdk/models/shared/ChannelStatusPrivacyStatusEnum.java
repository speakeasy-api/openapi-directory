package openapisdk.models.shared;


public enum ChannelStatusPrivacyStatusEnum {
    PUBLIC_("public"),
    UNLISTED("unlisted"),
    PRIVATE_("private");

    public final String value;

    private ChannelStatusPrivacyStatusEnum(String value) {
        this.value = value;
    }
}

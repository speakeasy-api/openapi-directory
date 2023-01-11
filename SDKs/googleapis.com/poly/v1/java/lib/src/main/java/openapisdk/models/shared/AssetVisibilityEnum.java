package openapisdk.models.shared;


public enum AssetVisibilityEnum {
    VISIBILITY_UNSPECIFIED("VISIBILITY_UNSPECIFIED"),
    PRIVATE_("PRIVATE"),
    UNLISTED("UNLISTED"),
    PUBLIC_("PUBLIC");

    public final String value;

    private AssetVisibilityEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum UserFieldsParameterEnum {
    ID("id"),
    CREATED_AT("created_at"),
    NAME("name"),
    USERNAME("username"),
    PROTECTED_("protected"),
    VERIFIED("verified"),
    WITHHELD("withheld"),
    PROFILE_IMAGE_URL("profile_image_url"),
    LOCATION("location"),
    URL("url"),
    DESCRIPTION("description"),
    ENTITIES("entities"),
    PINNED_TWEET_ID("pinned_tweet_id"),
    PUBLIC_METRICS("public_metrics");

    public final String value;

    private UserFieldsParameterEnum(String value) {
        this.value = value;
    }
}

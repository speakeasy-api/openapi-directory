package openapisdk.models.shared;


public enum ContentRatingSkfilmRatingEnum {
    SKFILM_UNSPECIFIED("skfilmUnspecified"),
    SKFILM_G("skfilmG"),
    SKFILM_P2("skfilmP2"),
    SKFILM_P5("skfilmP5"),
    SKFILM_P8("skfilmP8"),
    SKFILM_UNRATED("skfilmUnrated");

    public final String value;

    private ContentRatingSkfilmRatingEnum(String value) {
        this.value = value;
    }
}

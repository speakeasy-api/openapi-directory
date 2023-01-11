package openapisdk.models.shared;


public enum ContentRatingTvpgRatingEnum {
    TVPG_UNSPECIFIED("tvpgUnspecified"),
    TVPG_Y("tvpgY"),
    TVPG_Y7("tvpgY7"),
    TVPG_Y7_FV("tvpgY7Fv"),
    TVPG_G("tvpgG"),
    TVPG_PG("tvpgPg"),
    PG14("pg14"),
    TVPG_MA("tvpgMa"),
    TVPG_UNRATED("tvpgUnrated");

    public final String value;

    private ContentRatingTvpgRatingEnum(String value) {
        this.value = value;
    }
}

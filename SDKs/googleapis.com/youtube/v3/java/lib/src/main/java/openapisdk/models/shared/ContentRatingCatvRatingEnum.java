package openapisdk.models.shared;


public enum ContentRatingCatvRatingEnum {
    CATV_UNSPECIFIED("catvUnspecified"),
    CATV_C("catvC"),
    CATV_C8("catvC8"),
    CATV_G("catvG"),
    CATV_PG("catvPg"),
    CATV14PLUS("catv14plus"),
    CATV18PLUS("catv18plus"),
    CATV_UNRATED("catvUnrated"),
    CATV_E("catvE");

    public final String value;

    private ContentRatingCatvRatingEnum(String value) {
        this.value = value;
    }
}

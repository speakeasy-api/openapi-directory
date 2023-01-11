package openapisdk.models.shared;


public enum ContentRatingCatvfrRatingEnum {
    CATVFR_UNSPECIFIED("catvfrUnspecified"),
    CATVFR_G("catvfrG"),
    CATVFR8PLUS("catvfr8plus"),
    CATVFR13PLUS("catvfr13plus"),
    CATVFR16PLUS("catvfr16plus"),
    CATVFR18PLUS("catvfr18plus"),
    CATVFR_UNRATED("catvfrUnrated"),
    CATVFR_E("catvfrE");

    public final String value;

    private ContentRatingCatvfrRatingEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum ContentRatingPefilmRatingEnum {
    PEFILM_UNSPECIFIED("pefilmUnspecified"),
    PEFILM_PT("pefilmPt"),
    PEFILM_PG("pefilmPg"),
    PEFILM14("pefilm14"),
    PEFILM18("pefilm18"),
    PEFILM_UNRATED("pefilmUnrated");

    public final String value;

    private ContentRatingPefilmRatingEnum(String value) {
        this.value = value;
    }
}

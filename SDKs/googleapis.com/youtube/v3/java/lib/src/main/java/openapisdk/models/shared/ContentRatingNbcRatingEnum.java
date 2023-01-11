package openapisdk.models.shared;


public enum ContentRatingNbcRatingEnum {
    NBC_UNSPECIFIED("nbcUnspecified"),
    NBC_G("nbcG"),
    NBC_PG("nbcPg"),
    NBC12PLUS("nbc12plus"),
    NBC15PLUS("nbc15plus"),
    NBC18PLUS("nbc18plus"),
    NBC18PLUSR("nbc18plusr"),
    NBC_PU("nbcPu"),
    NBC_UNRATED("nbcUnrated");

    public final String value;

    private ContentRatingNbcRatingEnum(String value) {
        this.value = value;
    }
}

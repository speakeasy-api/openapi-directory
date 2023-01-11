package openapisdk.models.shared;


public enum ContentRatingNbcplRatingEnum {
    NBCPL_UNSPECIFIED("nbcplUnspecified"),
    NBCPL_I("nbcplI"),
    NBCPL_II("nbcplIi"),
    NBCPL_III("nbcplIii"),
    NBCPL_IV("nbcplIv"),
    NBCPL18PLUS("nbcpl18plus"),
    NBCPL_UNRATED("nbcplUnrated");

    public final String value;

    private ContentRatingNbcplRatingEnum(String value) {
        this.value = value;
    }
}

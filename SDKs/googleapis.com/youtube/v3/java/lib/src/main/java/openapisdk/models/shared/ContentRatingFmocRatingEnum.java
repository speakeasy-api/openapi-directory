package openapisdk.models.shared;


public enum ContentRatingFmocRatingEnum {
    FMOC_UNSPECIFIED("fmocUnspecified"),
    FMOC_U("fmocU"),
    FMOC10("fmoc10"),
    FMOC12("fmoc12"),
    FMOC16("fmoc16"),
    FMOC18("fmoc18"),
    FMOC_E("fmocE"),
    FMOC_UNRATED("fmocUnrated");

    public final String value;

    private ContentRatingFmocRatingEnum(String value) {
        this.value = value;
    }
}

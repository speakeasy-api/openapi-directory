package openapisdk.models.shared;


public enum ContentRatingCccRatingEnum {
    CCC_UNSPECIFIED("cccUnspecified"),
    CCC_TE("cccTe"),
    CCC6("ccc6"),
    CCC14("ccc14"),
    CCC18("ccc18"),
    CCC18V("ccc18v"),
    CCC18S("ccc18s"),
    CCC_UNRATED("cccUnrated");

    public final String value;

    private ContentRatingCccRatingEnum(String value) {
        this.value = value;
    }
}

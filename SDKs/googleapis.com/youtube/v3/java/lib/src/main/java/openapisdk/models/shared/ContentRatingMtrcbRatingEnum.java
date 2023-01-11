package openapisdk.models.shared;


public enum ContentRatingMtrcbRatingEnum {
    MTRCB_UNSPECIFIED("mtrcbUnspecified"),
    MTRCB_G("mtrcbG"),
    MTRCB_PG("mtrcbPg"),
    MTRCB_R13("mtrcbR13"),
    MTRCB_R16("mtrcbR16"),
    MTRCB_R18("mtrcbR18"),
    MTRCB_X("mtrcbX"),
    MTRCB_UNRATED("mtrcbUnrated");

    public final String value;

    private ContentRatingMtrcbRatingEnum(String value) {
        this.value = value;
    }
}

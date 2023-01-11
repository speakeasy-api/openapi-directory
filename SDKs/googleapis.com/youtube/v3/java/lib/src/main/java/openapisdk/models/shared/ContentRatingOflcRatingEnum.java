package openapisdk.models.shared;


public enum ContentRatingOflcRatingEnum {
    OFLC_UNSPECIFIED("oflcUnspecified"),
    OFLC_G("oflcG"),
    OFLC_PG("oflcPg"),
    OFLC_M("oflcM"),
    OFLC_R13("oflcR13"),
    OFLC_R15("oflcR15"),
    OFLC_R16("oflcR16"),
    OFLC_R18("oflcR18"),
    OFLC_UNRATED("oflcUnrated"),
    OFLC_RP13("oflcRp13"),
    OFLC_RP16("oflcRp16"),
    OFLC_RP18("oflcRp18");

    public final String value;

    private ContentRatingOflcRatingEnum(String value) {
        this.value = value;
    }
}

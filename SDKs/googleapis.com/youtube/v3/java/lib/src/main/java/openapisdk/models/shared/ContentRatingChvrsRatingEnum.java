package openapisdk.models.shared;


public enum ContentRatingChvrsRatingEnum {
    CHVRS_UNSPECIFIED("chvrsUnspecified"),
    CHVRS_G("chvrsG"),
    CHVRS_PG("chvrsPg"),
    CHVRS14A("chvrs14a"),
    CHVRS18A("chvrs18a"),
    CHVRS_R("chvrsR"),
    CHVRS_E("chvrsE"),
    CHVRS_UNRATED("chvrsUnrated");

    public final String value;

    private ContentRatingChvrsRatingEnum(String value) {
        this.value = value;
    }
}

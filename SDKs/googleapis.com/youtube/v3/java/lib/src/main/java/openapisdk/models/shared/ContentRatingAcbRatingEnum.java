package openapisdk.models.shared;


public enum ContentRatingAcbRatingEnum {
    ACB_UNSPECIFIED("acbUnspecified"),
    ACB_E("acbE"),
    ACB_P("acbP"),
    ACB_C("acbC"),
    ACB_G("acbG"),
    ACB_PG("acbPg"),
    ACB_M("acbM"),
    ACB_MA15PLUS("acbMa15plus"),
    ACB_R18PLUS("acbR18plus"),
    ACB_UNRATED("acbUnrated");

    public final String value;

    private ContentRatingAcbRatingEnum(String value) {
        this.value = value;
    }
}

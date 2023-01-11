package openapisdk.models.shared;


public enum ContentRatingBbfcRatingEnum {
    BBFC_UNSPECIFIED("bbfcUnspecified"),
    BBFC_U("bbfcU"),
    BBFC_PG("bbfcPg"),
    BBFC12A("bbfc12a"),
    BBFC12("bbfc12"),
    BBFC15("bbfc15"),
    BBFC18("bbfc18"),
    BBFC_R18("bbfcR18"),
    BBFC_UNRATED("bbfcUnrated");

    public final String value;

    private ContentRatingBbfcRatingEnum(String value) {
        this.value = value;
    }
}

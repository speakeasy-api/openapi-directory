package openapisdk.models.shared;


public enum ContentRatingCbfcRatingEnum {
    CBFC_UNSPECIFIED("cbfcUnspecified"),
    CBFC_U("cbfcU"),
    CBFC_UA("cbfcUA"),
    CBFC_UA7PLUS("cbfcUA7plus"),
    CBFC_UA13PLUS("cbfcUA13plus"),
    CBFC_UA16PLUS("cbfcUA16plus"),
    CBFC_A("cbfcA"),
    CBFC_S("cbfcS"),
    CBFC_UNRATED("cbfcUnrated");

    public final String value;

    private ContentRatingCbfcRatingEnum(String value) {
        this.value = value;
    }
}

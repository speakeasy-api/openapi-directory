package openapisdk.models.shared;


public enum ContentRatingEcbmctRatingEnum {
    ECBMCT_UNSPECIFIED("ecbmctUnspecified"),
    ECBMCT_G("ecbmctG"),
    ECBMCT7A("ecbmct7a"),
    ECBMCT7PLUS("ecbmct7plus"),
    ECBMCT13A("ecbmct13a"),
    ECBMCT13PLUS("ecbmct13plus"),
    ECBMCT15A("ecbmct15a"),
    ECBMCT15PLUS("ecbmct15plus"),
    ECBMCT18PLUS("ecbmct18plus"),
    ECBMCT_UNRATED("ecbmctUnrated");

    public final String value;

    private ContentRatingEcbmctRatingEnum(String value) {
        this.value = value;
    }
}

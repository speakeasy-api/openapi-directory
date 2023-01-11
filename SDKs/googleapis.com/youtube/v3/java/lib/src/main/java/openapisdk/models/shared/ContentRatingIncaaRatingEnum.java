package openapisdk.models.shared;


public enum ContentRatingIncaaRatingEnum {
    INCAA_UNSPECIFIED("incaaUnspecified"),
    INCAA_ATP("incaaAtp"),
    INCAA_SAM13("incaaSam13"),
    INCAA_SAM16("incaaSam16"),
    INCAA_SAM18("incaaSam18"),
    INCAA_C("incaaC"),
    INCAA_UNRATED("incaaUnrated");

    public final String value;

    private ContentRatingIncaaRatingEnum(String value) {
        this.value = value;
    }
}

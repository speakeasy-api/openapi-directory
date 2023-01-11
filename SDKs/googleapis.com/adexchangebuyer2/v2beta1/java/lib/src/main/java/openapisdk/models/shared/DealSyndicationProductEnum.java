package openapisdk.models.shared;


public enum DealSyndicationProductEnum {
    SYNDICATION_PRODUCT_UNSPECIFIED("SYNDICATION_PRODUCT_UNSPECIFIED"),
    CONTENT("CONTENT"),
    MOBILE("MOBILE"),
    VIDEO("VIDEO"),
    GAMES("GAMES");

    public final String value;

    private DealSyndicationProductEnum(String value) {
        this.value = value;
    }
}

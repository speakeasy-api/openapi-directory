package openapisdk.models.shared;


public enum ContentRatingFskRatingEnum {
    FSK_UNSPECIFIED("fskUnspecified"),
    FSK0("fsk0"),
    FSK6("fsk6"),
    FSK12("fsk12"),
    FSK16("fsk16"),
    FSK18("fsk18"),
    FSK_UNRATED("fskUnrated");

    public final String value;

    private ContentRatingFskRatingEnum(String value) {
        this.value = value;
    }
}

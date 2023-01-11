package openapisdk.models.shared;


public enum ContentRatingKfcbRatingEnum {
    KFCB_UNSPECIFIED("kfcbUnspecified"),
    KFCB_G("kfcbG"),
    KFCB_PG("kfcbPg"),
    KFCB16PLUS("kfcb16plus"),
    KFCB_R("kfcbR"),
    KFCB_UNRATED("kfcbUnrated");

    public final String value;

    private ContentRatingKfcbRatingEnum(String value) {
        this.value = value;
    }
}

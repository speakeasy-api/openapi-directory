package openapisdk.models.shared;


public enum ContentRatingMekuRatingEnum {
    MEKU_UNSPECIFIED("mekuUnspecified"),
    MEKU_S("mekuS"),
    MEKU7("meku7"),
    MEKU12("meku12"),
    MEKU16("meku16"),
    MEKU18("meku18"),
    MEKU_UNRATED("mekuUnrated");

    public final String value;

    private ContentRatingMekuRatingEnum(String value) {
        this.value = value;
    }
}

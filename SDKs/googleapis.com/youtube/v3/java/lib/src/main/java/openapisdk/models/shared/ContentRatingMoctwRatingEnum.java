package openapisdk.models.shared;


public enum ContentRatingMoctwRatingEnum {
    MOCTW_UNSPECIFIED("moctwUnspecified"),
    MOCTW_G("moctwG"),
    MOCTW_P("moctwP"),
    MOCTW_PG("moctwPg"),
    MOCTW_R("moctwR"),
    MOCTW_UNRATED("moctwUnrated"),
    MOCTW_R12("moctwR12"),
    MOCTW_R15("moctwR15");

    public final String value;

    private ContentRatingMoctwRatingEnum(String value) {
        this.value = value;
    }
}

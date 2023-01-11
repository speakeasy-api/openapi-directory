package openapisdk.models.shared;


public enum ContentRatingMccaaRatingEnum {
    MCCAA_UNSPECIFIED("mccaaUnspecified"),
    MCCAA_U("mccaaU"),
    MCCAA_PG("mccaaPg"),
    MCCAA12A("mccaa12a"),
    MCCAA12("mccaa12"),
    MCCAA14("mccaa14"),
    MCCAA15("mccaa15"),
    MCCAA16("mccaa16"),
    MCCAA18("mccaa18"),
    MCCAA_UNRATED("mccaaUnrated");

    public final String value;

    private ContentRatingMccaaRatingEnum(String value) {
        this.value = value;
    }
}

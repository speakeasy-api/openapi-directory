package openapisdk.models.shared;


public enum ContentRatingIfcoRatingEnum {
    IFCO_UNSPECIFIED("ifcoUnspecified"),
    IFCO_G("ifcoG"),
    IFCO_PG("ifcoPg"),
    IFCO12("ifco12"),
    IFCO12A("ifco12a"),
    IFCO15("ifco15"),
    IFCO15A("ifco15a"),
    IFCO16("ifco16"),
    IFCO18("ifco18"),
    IFCO_UNRATED("ifcoUnrated");

    public final String value;

    private ContentRatingIfcoRatingEnum(String value) {
        this.value = value;
    }
}

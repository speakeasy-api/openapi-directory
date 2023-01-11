package openapisdk.models.shared;


public enum ContentRatingAnatelRatingEnum {
    ANATEL_UNSPECIFIED("anatelUnspecified"),
    ANATEL_F("anatelF"),
    ANATEL_I("anatelI"),
    ANATEL_I7("anatelI7"),
    ANATEL_I10("anatelI10"),
    ANATEL_I12("anatelI12"),
    ANATEL_R("anatelR"),
    ANATEL_A("anatelA"),
    ANATEL_UNRATED("anatelUnrated");

    public final String value;

    private ContentRatingAnatelRatingEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum ContentRatingMpaaRatingEnum {
    MPAA_UNSPECIFIED("mpaaUnspecified"),
    MPAA_G("mpaaG"),
    MPAA_PG("mpaaPg"),
    MPAA_PG13("mpaaPg13"),
    MPAA_R("mpaaR"),
    MPAA_NC17("mpaaNc17"),
    MPAA_X("mpaaX"),
    MPAA_UNRATED("mpaaUnrated");

    public final String value;

    private ContentRatingMpaaRatingEnum(String value) {
        this.value = value;
    }
}

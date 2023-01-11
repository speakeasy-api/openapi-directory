package openapisdk.models.shared;


public enum ContentRatingMenaMpaaRatingEnum {
    MENA_MPAA_UNSPECIFIED("menaMpaaUnspecified"),
    MENA_MPAA_G("menaMpaaG"),
    MENA_MPAA_PG("menaMpaaPg"),
    MENA_MPAA_PG13("menaMpaaPg13"),
    MENA_MPAA_R("menaMpaaR"),
    MENA_MPAA_UNRATED("menaMpaaUnrated");

    public final String value;

    private ContentRatingMenaMpaaRatingEnum(String value) {
        this.value = value;
    }
}

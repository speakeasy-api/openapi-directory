package openapisdk.models.shared;


public enum ContentRatingEirinRatingEnum {
    EIRIN_UNSPECIFIED("eirinUnspecified"),
    EIRIN_G("eirinG"),
    EIRIN_PG12("eirinPg12"),
    EIRIN_R15PLUS("eirinR15plus"),
    EIRIN_R18PLUS("eirinR18plus"),
    EIRIN_UNRATED("eirinUnrated");

    public final String value;

    private ContentRatingEirinRatingEnum(String value) {
        this.value = value;
    }
}
